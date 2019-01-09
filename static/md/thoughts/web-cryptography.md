Typically found under `window.crypto`, the Web Cryptography API offers random value generation and allows encrypting and decrypting data on the browser using common algorithms like SHA-1 and PBKDF2. My goal in this investigation is to look into use cases, determine browser support, and evaluate how a team could use the API.

## Recent Spec Changes from January, 2017
The API specification changes from December, 2016 to January, 2017 are hard to determine, as the differences are not clearly outlined anywhere I could find:

- The supported algorithms look to be the same
- Methods are the same

It looks like the details are in specific implementations of the methods listed above. Sometimes methods output errors if buffers are of the incorrect length—certain types of errors can be considered security warnings. From what I gather, the changes in the W3C recommendation are to correct security concerns of this nature.

Here is a chart to see which algorithms and methods are supported to work together:

![Cryptography Chart](/static/img/thoughts/cryptography-chart.jpg)

## Use Cases
I came across the following [W3 Use Cases](https://www.w3.org/TR/webcrypto-usecases/) that outlines some scenarios where the API is useful. To summarize the suggested use cases:

1. New Keys: User logins in to sensitive data website, like a bank. On login, browser generates a public and private key and distributes to server. Browser also gets a _one-time_ and public key from server. Browser uses it's own keys to encrypt data sent to server; browser uses server keys to decrypt data sent from server. The idea is that __only server and browser can read data passed between client and server__. At some point, browser's keys and server's _one-time_ key are invalidated.
2. Pre-determined Keys: Pre-determined key is used on a server and hard-coded into a device, like a TV. The key is used minimally to generate session keys and validate the server and client (in this case, a TV) are _trusted_.
3. Comparison: Using `window.crypto.subtle.digest` with `SHA-256` algorithm to create a hash for comparing two data sources. In the given example, it is used to validate versions of `localStorage` stored libraries with the version from the server.
4. 1 Way Encrypting on Client: All data sent from a client is only for that client to access...such as data stored in the cloud. This is similar to what the cloud storage service Spider Oak does (Snowden approved!).
5. And a few others...

Lets analyze some of these...

I also see some potential in #1, where keys are exchanged and data is encrypted on both ends, but why is it needed and how securely are the keys exchanged? Hopefully an HTTPS connection would be enough; encrypting again will add another layer of protection, depending on how you look at it.. Scenario #2 is a bit troubling in this day and age, because I would think the hard-coded key onto a hard drive might be accessed by anyone that takes apart the device. Maybe this is not a huge concern, but if it happened the services using the _secret key_ would suddenly be free or accessible by anyone. For #3, I imagine comparing a hash might be overkill—storing a version number somewhere would suffice.

For me, the strongest contender here is #4, where encryption is only on the client and only the client can unlock. For storing data privately, having the Web Cryptography API is a huge plus.

## Browser Support
According to [caniuse.com](http://caniuse.com/#search=Web%20Crypto), support for Web Cryptography is good, but this may be only for basic functionality or hidden in vendor prefixed functions. For example, on Chrome you have access to `crypto.subtle`, but in Safari it is `crypto.webkitSubtle`. There are polyfills—[Netflix](https://github.com/Netflix/NfWebCrypto) has one, but they no longer maintain it and do not suggest using a polyfill. Best practice seems to be using whatever built-in browser functionality you can, even if it means accounting for the different ways of accessing the functionality. Why all this varied support? It seems the goal of the Web Cryptography API is to expose functionality that is already present on browsers—some browsers might not have had this functionality ready to go.

As far which functions are available, [this live table](https://diafygi.github.io/webcrypto-examples/) shows what your browser is able to handle. Here is it running Safari at the time of writing:

![Cryptography Safari](/static/img/thoughts/cryptography-safari.jpg)

There is also a [test report](https://rawgit.com/w3c/webcrypto/master/PR-test-report.html) from W3 about supported algorithms, but it does not cover all browsers and it may not be updated very often.

## The API
The Web Cryptography API provides the following:

- `digest`, the ability to compute a hash of an arbitrary block of data, in order to detect any change in it.
- `mac`, the ability to compute a message authentication code.
- `sign` and `verify`: the ability to digitally sign a document, and to verify a signature.
- `encrypt` and `decrypt`, the ability to encode or decode a document.
- `import` and `export`, the ability to import a key or export a key.
- `key generation`, the ability to create a cryptographically secure key, or key pair, without the use of base key, but using the available entropy of the local system.
- `key wrapping` and `unwrapping`, the ability to transmit, and to receive, a key from a third party, encoded using another key, without exposing the underlying key to JavaScript.
- `random`, the ability to generate cryptographically sound pseudo-random numbers.

(Courtesy of [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API))

## Some Basics
Here are some examples you can run in your browser's console to get a feel for working in encryption-land.
```
// Convert between strings and buffers
const stringToBuffer = string => new TextEncoder('utf-8').encode(string);
const bufferToString = buffer => new TextDecoder().decode(buffer);

// Returns "hello"
bufferToString(stringToBuffer('hello'));

// Returns random values of same array length, but it might not be random enough
crypto.getRandomValues(stringToBuffer('hello'));

// Get a SHA-1 hash as a buffer...you can convert to a string, but it's garble
crypto.subtle.digest(
  {name: 'SHA-1'},
  stringToBuffer('hello')
)
  .then(hash => console.log(new Uint8Array(hash)))
  .catch(error => console.error(err));
```

If you'd like to see more examples, check out [these](https://github.com/diafygi/webcrypto-examples), although they don't all work (possibly due to changing specs or browser compatibility).

## Pros
- Decent browser support
- Support for common algorithms
- Most encrypting functionality you would expect is available
- Decent amount of community examples to explore
- Ability to generate hashes
- Random value generation

## Cons
- Encrypting or decrypting in the browser is considered a security concern by many
- Use cases are tough to reason with
- Some browsers hide API under vendor specific names
- Concerns about random values not being random enough

## Conclusion
Before the Web Cryptography API there were, and still are, a number of polyfills and libraries out there with their own encryption tools. People built these tools for reasons, but they are questionable. Passing data that is encrypted sounds great, but there are some tricky steps. First, how do you distribute the necessary encryption keys in the first place? If over HTTPS, why not trust the connection and discount the need for encryption? Some would argue having an extra layer of protection is a valid reason. You might also pass an encryption key in a different fashion, such as text message. For those using cloud services that are to be only accessed by a single user, encrypting on the client side is a valid reason...especially when sensitive data and a desire for privacy are part of the equation.
