## Introduction
I've been exploring the world of Gatling and firing off requests to Lambda through API Gateway. At any point along the way, including where I've stopped, it felt like there was more to explore. There are both questions of curiosity and practical use that are left unanswered, but hopefully this gives us a starting place for the future.

## Testing Tools
I started off using a Node based testing tool, which was very easy to work with, but it started failing around 80 requests. Then I started working with Gatling. Creating the Gatling scenarios wasn't too bad, but it did require some Scala familiarity (luckily I had none). I also wanted to make the test easy to switch between 10 or 1000 users, so adding in that functionality was new. I'm still no Scala or Gatling expert, but it is OK to work with once you get started.

## Testing What?
There were two basic categories of tests, each with two types of tests:

1. Basics
  - GET some JSON
    * Request server for some JSON that it has ready to send out
    * Always send 200 response code
  - PUT some JSON
    * Send some data to the server
    * Compares stringified data to a string for a match
    * Return 200 or 400 response code depending on match
2. Dynamo
  - GET a record
    * Return a DynamoDB record based on a dynamic ID
    * It is a dynamic URL, but always return same record
  - POST a record
    * Send a small JSON object with some text
    * Insert record into DynamoDB
    * Return the saved item

## Test Setup Notes
- Endpoints were created using [Serverless](https://serverless.com/), which deployed an API Gateway and Lambda functions
- On `us-west-2` region
- Lambda throttled at 30 and later 100 concurrent executions (more on this later)
- Gatling Settings:
  * Used `rampUsersPerSec` mode ([docs](http://gatling.io/docs/2.2.3/general/simulation_setup.html)), which does this:

> Injects users from starting rate to target rate, defined in users per second, during a given duration. Users will be injected at regular intervals.

  * All tests were over 5 seconds
  * Users: from 10, 100, 1000, 2000, to 4000 or until it started failing
- Final Gatling tests were executed on an C4-XLarge instance (notes on this later)

## Testing Notes
Initial tests were executed on both a local machine, but it would would start failing with this Gatling error:
```
j.n.ConnectException: handshake timed out
```
Next I tried an EC2 C4-Large instance, but failed with this error if the request count got too high:
```
j.n.ConnectException: Failed to open a socket.
```
And, finally, the C4-XLarge proved quite capable. Once I moved up to the C4-XLarge, I was able to really able to hit see some higher numbers come up...

## What Stopped Working?
All Lambda functions come with a set of [limits](http://docs.aws.amazon.com/lambda/latest/dg/limits.html). The memory usage was fairly low in the tests and we weren't passing a lot of data, but we were throwing a lot of simultaneous request at Lambda. The default limit of 100 concurrent executions was quickly hit in our testing. Even on the basic GET and POST handlers, where executions maxed out at 150ms and averaged next to nothing, the limit was reached at about 1500 test requests. With that said, concurrent executions is not equal to the number of requests...at least for testing purposes. So, it was requested that AWS bump the concurrent executions limit to 1000. The increased limit helped reach the 5000 simultaneous requests range for basic GET and POST.

For the DynamoDB GET and POST requests, which were very roughly 500ms each, the throttling of Lambda hit hard. Due to the long execution, that 1000 concurrent executions was quickly reached. So, for the Dynamo GET and POST tests, it was hard to see much. The Dynamo GET was a little faster than POST, so more requests could be thrown at it before limits were reached, but not by a lot. With the Dynamo requests being so slow, it seems there must be a way to queue DynamoDB write (and maybe read) requests. Or, maybe my testing was inaccurate.

Another limit that I reached was a built-in timeout for all [Serverless functions](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/functions.md)...the default is 6 seconds, but that can be increased. I left it as-is and ceased testing when that limit was reached, but it's good to know how Lambda functions can have limits placed on them. According to the AWS limits (linked earlier) the max duration of a Lamda function is 300 seconds, but that is rather high...and you get billed for it...I guess it is good that Serverless provides a reasonable default.

### Working with AWS Support
A small note, it took a long time to get our concurrent executions limit increased. Granted, it might be faster if it were a more official Sony AWS account, but it was pretty slow. That was a surprise.

## The Scaling Results
Onto the results...let's start with the Basic tests. Both the Basic GET and POST tests were able to ramp up to 2000 users, which resulted in about 3000 active users. Ramping up to 4000 caused issues when the active users reached about 8000, due to the throttling limits. Looking over the response times for 10, 100, 1000, and 2000 users, it is clear that something is causing the response times breaching the milliseconds scale into seconds. For instance, for Basic Get 2000 and Basic Post 1000, which has no errors, the mean response time is over 1000ms. It's hard to say if that is a Gatling and/or test machine issue, or a result of Lambda responding slowly. I suspect it is the test machine and/or Gatling. Further testing would help here.

Comparing the Get Basic 10 to Get Basic 1000 and Basic Post 10 to Basic Post 100, which are the tests that do not include the high means, it seems that AWS does not get affected in any great way if the user count changes. At about 900 users Lambda was dishing out 110ms response times for 50% of the requests; at 500 users it was 122ms response times for 50% of the requests. From this I gather we either were not hitting it with enough users and/or Lambda can push back with anything we show it. With that said, if we count the numbers with very high means, for example, the Get Basic 2000, the picture changes completely.

The Dynamo GET test showed no errors at 10 and 100 ramp-up users, while the POST test could only manage 10 ramp-up users (sometimes 100, but if the function ran longer than 6s Serverless would time it out). For reference, a 10 users ramp-up generates about 25 users total; a 100 user ramp-up creates about 200-250 users.

The Dynamo GET 10 starts off high at 500ms and did not get much better. For the Dynamo GET 100, we do start seeing some speed increases. If we increased the concurrent users to something like 2000 and were able to do a Dynamo Get 1000 or 2000, I think the response times would still be good (around 100ms to 300ms), but it's hard to say. If I had to draw a conclusion, it would be that the getting data from Dynamo is speedy, but it's not blazing fast.

For the Dynamo POST test we see varying results. Having 10 concurrent users was not a problem and was quick to moderate to respond. When we ramped up to 100 users, it looked like Lambda took a second to wake up, then kept-up very well for the most part, producing 90% of responses under 200ms. There is more testing to be done here, because it seems sometimes Lambda takes way too long to ramp up or something else is happening. It could be a matter of increasing our function timeout of 6s, but having to set it to anything higher seems off.

## Conclusion
Without further investigation, I would be hesitant to give certain recommendations about API Gateway and Lambda services. What I would suggest, is making sure timeouts, both in the Lambda function and the client function, are set high. It seems like the services will ramp up nicely to whatever needs you have, but sometimes that process takes a while.

Using API Gateway and Lambda at scale is interesting, testing it even more so. I realize that the testing method of ramping up to X amount of users within only 5 seconds might be a tough challenge for the service. Perhaps it would do better if that test was over a minute or two. Also, I think the Lambda concurrent users limit could be bumped up even higher to 5000 or more. Hopefully this is a decent place to start for more testing and understanding of how Lambda responds to scale.

I have stopped this investigation without all the answers because it went a big longer than a standard investigation and I'm not sure how much more time we would like to invest in it.
