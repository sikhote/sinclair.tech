The [Serverless](https://github.com/serverless/serverless) framework is a strong option for using Amazon Web Services (AWS), which builds a network for you—I investigated some alternatives that all look to ease your AWS needs.

## Claudia.JS
Check out the [Website](https://claudiajs.com), [GitHub](https://github.com/claudiajs/claudia), and [Example Projects](https://github.com/claudiajs/example-projects)

Claudia is a tool for automating steps that create AWS API Gateways and linked Lambda functions. The best part about Claiudia is that the API endpoints are regular Node.js. It can also easily tap into DynamoDB with ease. At first glance, it is about the same as Serverless, but it claims to be different—rather than being a complete solution that sits above AWS Services, Claudia looks to work with them.

> Rather than being a complete solution that sits above AWS Services, Claudia looks to work with them

"Claudia is a deployment utility, not a framework", it claims. Another large difference is in deployment: whereas Serverless uses an AWS CloudFormation template to build out resources, Claudia does it all without one. What is [CloudFormation](https://aws.amazon.com/cloudformation)? There's a lot to it, but to summarize: it is an AWS service that puts together the pieces of AWS resources in a standardized way. While not ultimately necessary, CloudFormation has its benefits:
- Connect services through template files to create a Stack
- A CloudFormation Stack can be managed all at once
- CloudFormation goes far beyond linking only API Gateways and Lambda functions

[![AWS CloudFormation](/static/images/thoughts/aws-cloudformation.jpg)](https://www.youtube.com/watch?v=Omppm_YUG2g)

Overall, I thought Claudia.JS was great, as it saved a lot of time clicking through the AWS console to create an endpoint. Claudia's API Builder package automatically created an API, a "hello" resource, a GET method, and a Lambda function.

## AWS Serverless Application Model (AWS SAM)

[AWS SAM](https://github.com/awslabs/serverless-application-model) looks to "define a standard application model for serverless applications". The initial commit is from October, 2016, so it is relatively new. I had a hard time finding documentation that would help me get started—I got the impression that this project is low priority to Amazon.

I attempted to create an API using SAM. At the time of writing, there were only 9 example models within their GitHub account. Compared to Serverless or Claudia, this made me cry inside...and appreciate the other tools more. Never the less, I forged ahead and found an [Amazon doc](http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html) for help.

To define an API you can either use a swagger.yml file or spell out the different resources within the template.yaml file itself—in SAM's GitHub example, they use the latter method. There does seem to be a lot of options within the template.yaml file, but it was a bit of an overload for creating a simple API.

After creating the template.yaml file, it is time to package and deploy. Using the AWS CLI, I attempted to package and to deploy. After waiting a minute or two for the processes to complete, it failed and offered a stack trace of why. I checked that out, but it wasn't clear why it failed. I decided to go for a simpler example, the "hello world" and it eventually worked after some trial and error...the AWS console was helpful in checking out errors.

Overall, I think with a better tutorial I could have gone a bit further, but documentation was lacking and error messages were not clear at first. On to bigger and better things...maybe one day SAM will be given more priority and provide a better experience.


## Apex, Terraform, & Swagger

[Apex](http://apex.run/) markets itself as a way to "build, deploy, and manage AWS Lambda functions with ease". Right away I got the impression that Apex was about developing in your language of choice, allowing the communities like cult of Go coders to write-away in in the AWS ecosystem. Apex is able to do this "through the use of a Node.js shim injected into the build". Apex also seems to come with a lot of tools for testing, logging, and deployment.

Getting started, I downloaded and installed Apex and set the AWS environmental variables, which can be set by profile (per project or at time of deployment) and/or manually. The documentation was clear and easy to follow (sorry SAM). I quickly generated a "hello world" AWS Lambda function, deployed, and used apex to test it.

Beginning to read through Apex's "Getting Started" material, I felt like there was depth, but approachable. In Apex there are Projects (at the highest level) and their child functions, which are just AWS Lambda functions in the end. Projects are configured with a JSON file to store options like memory, role, and timeout settings. Functions can also be configured with their own JSON file, but the Projects config is used as a fallback.

Apex seems very focused on functions and it does it well. Apex lacks much beyond functions, so it is up to the user to go from there. Apex acknowledges the difference between itself and Serverless and seems to suggest using [Terraform](https://www.terraform.io), which is claimed to be a more robust "tool for building, changing, and versioning infrastructure safely and efficiently". My impression was that Serverless was already decently robust, so I read on. It seems Terraform (by HashiCorp, maker of Vagrant) is a "cloud-agnostic" version of CloudFormation. That seems interesting, because times changes and the AWS ecosystem may not always be a great option. I started reading about Terraform, but it did seem clear how to actually use it, so I ceased that exploration.

Next, I looked into using [Swagger](http://swagger.io) to link Lambda/Apex functions. The AWS API Gateway can import and export Swagger templates, which puts Swagger in a great position for developers already familiar with the Swagger's style. Using a Swagger template file you can point to specific Lambda functions, but this linking has to be done manually, similar to Serverless. By manually, I refer to the process of defining which functions are used by what API endpoint. For comparison, in Claudia you defined the API endpoint and the Lambda function in the same file (as you would in Node.js). Serverless is similar to the Swagger method, because you spell out that link, but Serverless deploys everything for you at once. With the Swagger method, it's on you to link and separately deploy both the Lambda functions and the API.

Looking to automate the Swagger/API Gateway/Lambda method, I tried out a package called "apex-api-gateway" that "helps you deploying your Apex project into API Gateway". Perfect! I tried to build an API using their provided [boilerplate](https://github.com/YoruNoHikage/apex-api-gateway-boilerplate). Unfortunately, this tool was a bit outdated or I had bad luck, as it would not create the API (I got an obscure error)...oh well.

## In Conclusion
There are some interesting options out there for deploying an AWS API Gateway and Lambda functions. Serverless seems to be on the right path of finding a good balance between ease of use and powerful features. I did not expect to like Claudia.JS so much, but it really made the process of creating an API within AWS easy. Expect another post soon explaining how to create an API and a deeper comparison to Serverless. Looking on, there are certainly other ecosystems to explore, like Google's Cloud services—Serverless even has examples of connecting to them.
