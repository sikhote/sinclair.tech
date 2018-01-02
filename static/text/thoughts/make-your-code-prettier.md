Linting tools for JavaScript are nothing new, so why is there another new one? This was exactly my thought upon hearing about [Prettier](https://github.com/prettier/prettier). ESLint, the industry standard, has been around since 2013; before that we had JSHint (since 2010) and JSLint. ESLint has some _fixable_ properties, which is great, but there is a lot that is left to the developer to decide. For example, when should this...

```
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

...become this?

```
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

This is where ESLint falls short...it can be examine the maximum length for a line, but it does not fix lines that are too long...it also does not fix a lot of other issues it reports. [Prettier](https://github.com/prettier/prettier) steps in with an opinionated solution for this issue and nearly all other formatting issues.

## How it Works
[Prettier](https://github.com/prettier/prettier) parses all code and returns a reinterpreted version that conforms to any configuration options. The parse and reformat approach is different than ESLint, because all code is rewritten, rather than examined.

> all code is rewritten, rather than examined

[Prettier](https://github.com/prettier/prettier) proclaims it never has to check code, as it just writes it out, fresh. Kind of scary, right?

## Interfacing with Prettier
There are a few options to start using [Prettier](https://github.com/prettier/prettier):

### API
Using the [prettier](https://www.npmjs.com/package/prettier) npm package, you can format some code with the `format` method:

```
import { format } from 'prettier';

const source = `
  let i = 'hello';
  console.log(i + ' world');
`;

const newSource = format(source, {
  // Some configuration options
});
```

### Editor Plugins
Editor plugins are available for Atom, Emacs, Vim, Visual Studio Code, Visual Studio, Sublime Text, & JetBrains. I used the plugin for Atom and it was interesting, to say the least. There were options to always use the plugin or on demand. Using it on demand is very handy and how I currently have my editor configured. Using it as _always on_ is very neat, because as soon as you save a file, it gets parsed in front of your eyes and all your coding blunders, like forgotten semi-colons (the agony!), are fixed. A consideration with having it always on is that it changes a lot of lines. Lots of line changes are not necessarily a problem, but you might often work on projects where not everyone uses [Prettier](https://github.com/prettier/prettier). As you can imagine, Git diffs can get _pretty_ large.

### Command Line Integration
Assuming you have globally installed [Prettier](https://github.com/prettier/prettier), you can execute `prettier` on some files:

```
prettier --single-quote --trailing-comma es5 --write "{app,__{tests,mocks}__}/**/*.js"
```

### Gulp
There is also the [gulp-prettier](https://github.com/bhargavrpatel/gulp-prettier) plugin that can be used like any other Gulp plugin:

```
import gulp from 'gulp';
import prettier from 'gulp-prettier';

const options = {
  // Some configuration options
};

gulp.task('prettier', () => gulp
  .src('*.js')
	.pipe(prettier(options))
	.pipe(gulp.dest('./dist'))
);
```

### Webpack
There are plugins for using Prettier with Webpack, but they are not without issues (at time of writing). The main issue is that Prettier rewrites files, causing Webpack to run it's bundling process twice. There's also issues where the process crashes on syntax errors. With that said, here are the plugins:

- [prettier-webpack-plugin](https://github.com/hawkins/prettier-webpack-plugin)
- [prettier-eslint-webpack-plugin](https://www.npmjs.com/package/prettier-eslint-webpack-plugin)

...use with caution.

Overall, all of these options make [Prettier](https://github.com/prettier/prettier) easy to integrate. Using an editor plugin is a good place to start.

## Configuration Options
Let's checkout a configuration object with __all__ options:

```
const prettierConfig = {
  // Fit code within this line limit
  printWidth: 80,

  // Number of spaces it should use per tab
  tabWidth: 2,

  // If true, will use single instead of double quotes
  singleQuote: false,

  // Controls the printing of trailing commas wherever possible. Valid options:
  // "none" - No trailing commas
  // "es5"  - Trailing commas where valid in ES5 (objects, arrays, etc)
  // "all"  - Trailing commas wherever possible (function arguments)
  //
  // NOTE: Above is only available in 0.19.0 and above. Previously this was
  // a boolean argument.
  trailingComma: "none",

  // Controls the printing of spaces inside object literals
  bracketSpacing: true,

  // If true, puts the `>` of a multi-line jsx element at the end of
  // the last line instead of being alone on the next line
  jsxBracketSameLine: false,

  // Which parser to use. Valid options are 'flow' and 'babylon'
  parser: 'babylon'
};
```

Coming form the world of ESLint options, which has practically everything, I found this underwhelming. I don't _need_ more options, because the unchangeable formatting choices are quite good, but it feels like there is a deficit in flexibility.

## Integration with ESLint & Other Tools
The proliferation of tools for making ESLint and Prettier work together is important to mention, because, in a way, these are two competing technologies. There are rules within ESLint that overlap Prettier's domain, which is OK, because the two can play nicely. For one, Prettier can infer it's own rules from an `.eslintrc` file. Also, Prettier is typically executed _before_ ESLint. Let's look at a common task flow:

__Code is Saved__ -> __Prettier modifies files__ -> __ESLint does final checks (with or without fixing)__

So, first your code gets tidied up by Prettier, then ESLint steps in for a final assessment of formatting issues to address Prettier's youthfulness. And why? It seems some people still want more rules enforced, rules which Prettier does affect in one way or another when it spits out the code it has consumed.

There are few ways to combine ESLint and Prettier. Copying straight from Prettier's GitHub:

- [eslint-plugin-prettier](https://github.com/not-an-aardvark/eslint-plugin-prettier) plugs prettier into your ESLint workflow
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) turns off all ESLint rules that are unnecessary or might conflict with prettier
- [prettier-eslint](https://github.com/prettier/prettier-eslint)
passes `prettier` output to `eslint --fix`
- [prettier-standard](https://github.com/sheerun/prettier-standard)
uses `prettier` and `prettier-eslint` to format code with standard rules 
- [prettier-standard-formatter](https://github.com/dtinth/prettier-standard-formatter)
passes `prettier` output to `standard --fix`
- [prettier-with-tabs](https://github.com/arijs/prettier-with-tabs)
allows you to configure prettier to use `tabs`
- [neutrino-preset-prettier](https://github.com/SpencerCDixon/neutrino-preset-prettier) allows you to use prettier as a neutrino preset

## Pros
- Greater formatting consistency
- Ends a lot of formatting discussions
- Easy to use
- Works well with ESLint
- Allows disabling per-line via `// prettier-ignore`
- Good work-flow integration options and stepping stones
- Allows faster coding (less time fixing formatting)
- Parses all code and writes new files, which requires valid code

## Cons
- Opinionated due to lack of configuration options
- Still in beta phase and may change
- Slightly unpredictable
- Parses all code and writes new files, which is a bit scary

## Where is the Value
Using [Prettier](https://github.com/prettier/prettier) on a daily basis for projects could bring a lot of consistency to any committed code. It is common for a project to have more than one active developer; adding [Prettier](https://github.com/prettier/prettier) to these projects would save back and forth time in pull requests, save time when coding (no more taking time to format things yourself), and push every style to be on the same page. Sure, it sounds a bit like everyone's code is wearing the same uniform, but for code that is a good thing. [Prettier](https://github.com/prettier/prettier) allows developers to focus on other types of quality, not just that it passes linting rules.

## Integrating with an Existing Project
I wanted to test out how much change I might see on a project I commonly work on, so I added a simple NPM script to execute on command:

```
"prettier": "prettier --bracket-spacing --single-quote --tab-width 2 --trailing-comma none --parser babylon --print-width 120  --write \"{client,server}/**/*.{js,jsx}\""
```

I wanted to see how many files would be changed, what the code would look like, and how _ugly_ the code was. I ran the script and waited...it took maybe 2 seconds to execute. For my project, nearly every file was touched:

__48 changed files with 594 additions and 538 deletions.__

What did it change? Was it useful? Well, it brought a lot of consistency to the code. Check out a portion of a `git diff` that shows some common changes:

![Prettier Diff](/assets/images/thoughts/prettier-diff.jpg)

These are not ground-breaking changes, but subtle differences. ESLint could have detected the formatting inconsistencies, but this project did not have all ESLint rules applied. Compared to ESLint, which does not assume anything, Prettier is quite the opposite—it has opinions and it changed our files!

Prettier did modify 48 files, but running the application still worked as expected. One issue came up, though, where ESLint and Prettier collided:

```
// Old
fontFamily: '\'Roboto\', sans-serif',

// Prettier
fontFamily: "'Roboto', sans-serif",
```

Not too big of a deal, but our ESLint file did not like those double quotes. I added `/* eslint-disable quotes */ ` to the top of the file and said goodbye to the linting error. In this case, it might be good to remove the ESLint rule for quotes, since Prettier can handle it. I was pleasantly surprised by the results of applying Prettier...allowing a library in beta to modify code does worry me, a bit, but this was a positive result.

## Conclusion
I was on the fence about adopting [Prettier](https://github.com/prettier/prettier) when I first came across it—I wanted all formatting options to be configurable. At some point ESLint practically spoiled coders with options that are not terribly important. It is also worth noting that, for the sake of consistency, developers must withdraw their personal preferences and adopt a standard. Using [Prettier](https://github.com/prettier/prettier) not only brings standards, it automatically enforces them as well. What's great about this is the automation—it is a hassle to code and fix formatting issues that you might not even agree with...it's much more enjoyable to code when the _boring_ parts are done for you...like adding semi-colons and making sure you added a space after a curly brace.

> This is a beta, and the format may change over time

Yes, the tool is in beta, but the benefits seem helpful enough that it is a worthy addition to any project. If you are interested in trying out Prettier I think you will be quite pleased with a robot-formatted repository.
