[Polished](https://polished.js.org/) is a set of functions for those writing CSS within JavaScript. Polished will look very familiar for those that are familiar with Sass, Less, Stylus, or any other CSS pre-processor, because it adds mixins, color functions (for example, darken, change hue, and transparentize), and other random CSS goodies. In this investigation I will try out some of these functions and discuss use-cases for the library as a whole.

## Setup and Basic Use

Installation is easy through `yarn add polished` or `npm i -S polished`. From there, Polished functions are available on-demand, like this:

```
import { darken } from 'polished';

const darkRed = darken(0.2, '#ff0000');
```

Using the tree-shaking method for accessing Polished functions, bundlers like Webpack will only import the functions we need, reducing our bundle size. You could also import all functions by doing the following:

```
import * as polished from 'polished';
```

## Babel Plugin

One concern with using Polished is that every time a function is used it impacts performance. In the example above (making a darker shade of red) the action only needs to happen once...that single time being during the bundling phase. This is actually possible with [babel-plugin-polished](https://github.com/styled-components/babel-plugin-polished), using Babel to perform the function calls and printing the result. This plugin brings a small performance gain...minimal, but possibly important in larger projects. Regardless of how much performance it adds, adding the plugin is very easy within a `.babelrc` file:

```
{
  ...
  "plugins": ["polished"],
  ...
}
```

## The Best Features

Polished has great documentation [here](https://polished.js.org/docs/) of all functionality. Here are some of the standout features:

### Color Functions

You can transform colors in a world of ways, including darken, lighten, saturation, opacify, shade, tint, transparentize, and hue. To me, this is the only reason I would probably ever add Polished, but it is a good enough reason on it's own.

### Mixins

These "mixins" are chunks of code that shorten how much code you write. For example, for you clear-fix fans out there...

```
import { clearFix } from 'polished';

// Styles as object usage
const someStyle = {
   ...clearFix(),
}

// Use in a component
<div style={someStyle} />

// CSS as JS Output
'&::after': {
  'clear': 'both',
  'content': '',
  'display': 'table'
}
```

### Shorthands

These can be useful ways to output chunks of code in ways that are slightly faster than the regular way. For instance, let's check out some margins:

```
import { margin } from 'polished';

// Regular full margin
const regularMargins = {
  margin: '12px 0 36px 43px'
};

// Polished full margin
const polishedMargin = {
  ...margin(12, '0', 36, 43)
};

// Regular partial margins
const regularMargins = {
  marginTop: 46,
  marginLeft: 12
};

// Polished partial margin
const polishedMargin = {
  ...margin(46, 0, 0, 12)
};

```

I found margin a little _funky_, but overall I liked it, since it means the margin property was always specified on a single line. Incase it wasn't clear, passing a number `0` makes Polished skip adding that CSS property, but using `'0'` as a string makes the CSS property to be `0px`. Would I use this all the time? Hmm, maybe not, it might turn code a little too hard to read for the unfamiliar.

## Pros

- Easy to use
- Handy colors functions
- Slightly useful shortcut and mixin functions

## Cons

- Adds to bundle weight (every little bit counts)
- Might not be entirely necessary
- Lots of functionality that will never be used (for example, I personally never use clear fix, ever)

## Use Cases

When I am coding a custom look for a website and have been given a few strict colors to work from, there is often a need to show slight variations of these colors. Sometimes this means darkening or lightening the color for a hover effect; other times it is nice to easily create a border that is just slightly darker for that encapsulating effect on a button. Typically a website will have some sort of theme and all colors, including their slight variations, are all created in one color library—this is where Polished will make your day easier. Sure, you could open Photoshop, open the color picker, and find the right color, but it is faster to use Polished. I say this with confidence, because I would often use the color functions that Sass, Less, and Stylus provided. With CSS in JavaScript I lost this functionality...now it's back.

> I would often use the color functions that Sass, Less, and Stylus provided...now it's back

Nowadays, one often uses a theme and UI kit, like Material UI, that does all your color functions for you. However, even then, you may still want a color trick up your sleeve if you need to adjust a component or style some text color to your liking. Anything to prevent leaving the code...or, anything to prevent paying for Photoshop, right?

## Conclusion

Not every project will need Polished, but I'm happy to know the functionality is out there and ready, should it be needed. It is also great that Polished allows importing only the functionality one needs, rather than all of the functions. Polished color functions are the standout feature for me and it seems they got it "right"...the rest is just icing on the cake.
