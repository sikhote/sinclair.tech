Flow is an opt-in type checker by the same company that brought us React...ol' Facebook. The idea of type checking JavaScript is hated by some and embraced by others. JavaScript is a dynamically typed language, so why bring in "features" that might hamper it's flexibility? Some find worthy rewards in the error prevention it brings...others find it a waste of time. Facebook's Flow is not the first attempt at type checking by any means—Microsoft's TypeScript is built around it—but too many people have been left with a bad taste in their mouth after trying what options are out there. This left a marketplace for Flow...it requires little effort and some reward for it's way of type checking.

In their initial blog post about it they start things off by throwing some shade at TypeScript, stating...

> fundamentally different than existing JavaScript type systems (such as TypeScript)...[which does] not provide as many benefits as it could without significant additional effort

Things are rough in the land of JavaScript, one false move and someone else in the community pounces. This is good—quicker evolution of tools and libraries.

## Errors of All Types
Anyhow, back to Flow...it is "smart". Let's look at some example code, which will cause Flow errors:

```
function length(x) {
  return x.length;
}
var total = length('Hello') + length(null);
```

However, with the following code, Flow is a happy camper:

```
function length(x) {
  if (x !== null) {
    return x.length;
  } else {
    return 0;
  }
}
var total = length('Hello') + length(null);
```

This inferred typing is just the balance a lot of people want...not quite TypeScript, but a peaceful middle ground. In the first code example above, the function can easily fail, but in the second example the function validates it's argument (to a degree) and reduces potential crashes. Facebook says "Flow understands the intricacies of JavaScript’s object model: constructors, methods, prototypes, and their dynamic extension and binding". It also works well with React, of course. Using a React component's `PropTypes` gives Flow a chance to catch errors you may have caused when accessing `props`. Interestingly, this starts to overlap with some of what ESLint does—particularly, checking for undefined variables.

## Getting Started
Flow uses a `.flowconfig` file that should be in your root project folder. The config has `[ignore]`, `[include]`, `[libs]`, `[options]`, and `[version]` sections. I only added into the `[libs]` section with a single entry:

```
[libs]
flow/
```
If needed, this allows declaration files to be added into the `flow` folder. For example, Webpack comes with a `require.context` ability for including files in a bundle...Flow was not happy about `require` or `require.context`, as it did not recognize it as a global coming from Webpack. So, I created `flow/webpack.js.flow` and added this:

```
declare var require: Object;
```
I could have used `any` instead of `Object`, but I was trying to be specific. Check out the [quick reference](https://flowtype.org/docs/quick-reference.html) for other types out there, like `string` and `number`.

Once you have your config setup, which is __required even if empty__, there are some NPM libraries to grab:

- [flow-bin](https://github.com/flowtype/flow-bin) to get access to the `flow` CLI command
- [iflow-react-intl](https://www.npmjs.com/package/iflow-react-intl) for `intl` support
- Possibly add [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) and [babel-eslint](https://github.com/babel/babel-eslint)
- Possibly add [transform-flow-strip-types](https://babeljs.io/docs/plugins/transform-flow-strip-types/) as a plugin to your `.babelrc`—this removes any type annotations in your code

Then, create some JavaScript files and add `// @flow` to the top of each one. If that is not there, Flow passes right on by, like it's not even there ;(
  
> Flow’s type checking is opt-in — you do not need to type check all your code at once

## Adding into an Existing Project
I attempted to `flow check` an ES6 boilerplate I work on. I was able to add `// @flow` to files and run `flow check` in terminal within the root project folder. This required adding a `.flowconfig` file to the root project folder, but I did not need to add anything in (remember, it is required, even if empty). It worked well this way, but I wasn't satisfied...I wanted to check everything!

I ran `flow check --all`, which works as you might expect, and my computer's fans spun for a few minutes. I killed the process manually. This made sense, that it would take forever and probably crash and burn, because it was checking all files, including those in `node_modules`. Attempting to dance around this issue, I added the following to `.flowconfig`:

```
[ignore]
.*/node_modules/**/.*
```

It worked, kind of...I got 423 errors:

![Flow Errors](/static/img/thoughts/flow-errors.jpg)


Taking a closer look at these errors reveals most of them are not actually useful—Flow is not looking through `node_modules` (due to the ignore). Flow is completely ignoring these files, rather than slightly ignoring them...hmmm. So, I hoped it would work to run `flow check` with this `.flowconfig`:

```
[include]
.*/server/
.*/client/
```

Sadly, Flow did not check any files unless it had `// @flow` within. From what I gather, `[include]` is only useful for files external to the base config...maybe it should be renamed `[external]`.

I looked through the docs and GitHub issues, but felt underwhelmed with open issues like [1237](https://github.com/facebook/flow/issues/1237) and [1548](https://github.com/facebook/flow/issues/1548) and [869](https://github.com/facebook/flow/issues/869). Apparently, there is still not a good way to check all files (and only pass-through the `node_modules` folder when needed). The Flow repo is not well maintained, at least for issues, so there are tons of open issues and questions.

I also discovered that, when parsing through a library (anything in `node_modules`), if no definitions are found, then Flow leaves these libraries untyped. A Facebook tool called [flow-typed](https://github.com/flowtype/flow-typed) looks to resolve this, adding "high quality" types for any project dependencies it supports. This completely reminded me of issues TypeScript users encounter.

Adding `// @flow` to every file in a boilerplate's __client__ codebase , I found 52 errors. Most of the errors were missing type annotations and incompatible types. To fix all the errors might take a couple days of work, assuming there is some consistency in making fixes. I don't see a lot of benefits for existing code that works, but I could see benefits coming more from new code. It would be easier to catch errors and write safeguards for potential failures. Being aware of pitfalls is always a plus.

In conclusion, to implement Flow into an existing project, the steps are:

1. Prepend `// @flow` to each file (I suggest only a few at a time)
2. If needed, add some declaration files (see Webpack example above) and use [flow-typed](https://github.com/flowtype/flow-typed)
3. If any type annotations are added, strip them out with [transform-flow-strip-types](https://babeljs.io/docs/plugins/transform-flow-strip-types/)
4. Check all files with [gulp-flowtype](https://github.com/charliedowler/gulp-flowtype), a Webpack loader, or the CLI command `flow check`

Here are some other add-ons to consider
- [babel-plugin-flow-react-proptypes](https://github.com/brigand/babel-plugin-flow-react-proptypes): a Babel plugin which really makes one buy into the Flow ecosystem when defining component props
- [eslint-plugin-flowtype-errors](https://github.com/amilajack/eslint-plugin-flowtype-errors): an ESLint plugin for showing Flow errors
- [Nuclide](https://nuclide.io): Atom user? This is Facebook's mega plugin with built in Flow support
- [babel-plugin-typecheck](https://github.com/codemix/babel-plugin-typecheck): a Babel plugin for adding typechecking code to your compiled files

## Pros
- Easy entry to type checking
- Opt-in from the beginning
- Decent documentation
- Decent community adoption
- Does not require a lot of buy-in or setup for an existing project
- Works on code that is not annotated...it makes inferences
- [flow-typed](https://github.com/flowtype/flow-typed) for library definition files
- Not TypeScript

## Cons
- Prepending `// @flow` everywhere is code bloat
- No confidence in maintainer's dedication or getting bugs resolved
- Despite inferred types, still decent amount of annotations and fixes to add
- Hard to Google for support (no joke!)

## Conclusion
The more we use 3rd party libraries and data in JavaScript, the more concern there is for inconsistent outcomes. One example of how Flow can help is when updating NPM packages: Flow could potentially pick up on APIs that have changed and where our code needs updating. Flow is also great for new projects, because it will help find errors before you even see them in your browser console...if you have an existing project, the benefits probably won't seem as worthy. I recommend using Flow in a prototype project or somehow gaining more familiarity with it before full adoption.

I imagine adoption of Flow is a nice to have for some, but a hurdle and pain for others. I'm still on the fence of it all, especially after learning the implementation drawbacks with checking all files on an existing project. I see Flow as an easier way, compared to TypeScript, to reap the benefits of a typed language. The adoption plan is straight forward and incremental (file by file). What does the code gain? Well, that's very debatable and up to you to decide for yourself.
