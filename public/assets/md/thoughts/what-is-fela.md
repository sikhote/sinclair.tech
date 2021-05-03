Fela is a CSS in JavaScript library that looks to provide a flexible, framework agnostic way to output CSS. If you are familiar with writing CSS in JS using React's inline styles, Fela will feel right at home. Using a JavaScript object that maps CSS properties to their values, Fela translates this object into regular CSS that gets written to a `<style>` tag of your choice. This is the basic concept of Fela, CSS in JS written to a `<style>` tag, but Fela comes with some common features you would expect, like autoprefixing, that are common in tools like PostCSS. Fela is designed to work with any framework and has examples in Angular and Inferno, but React & React Native are probably it's favorites. Let's look at a basic Fela example...

## How to Use Fela

Here is a basic Fela implementation to gaze your eyes on...no other frameworks here:

```
import { createRenderer } from 'fela';
import { render } from 'fela-dom';

const rule = props => ({
  fontSize: props.fontSize + 'px',
  color: 'red',
  ':hover': {
    color: 'blue',
    fontSize: props.fontSize + 2 + 'px'
  },
  '@media (min-height: 300px)': {
    backgroundColor: 'gray',
    ':hover': {
      color: 'black'
    }
  }
});

// Create renderer
const renderer = createRenderer();

// Store classname
const className = renderer.renderRule(rule, { fontSize: 12 });

// Write styles to a <style id="stylesheet"></style> node
render(renderer, document.getElementById('stylesheet'))

// Add CSS class to node
const someDiv = document.getElementById('some-div');
someDiv.className = className;
```

In terms of writing CSS in JS, this grouping of properties and selectors is as good as I can imagine, but it's still a bit clunky. What's great is you have a way to create media queries and use selectors...features that React's styling could not provide.

So what's happening in that example above?

1. Write styles or rules as a pure function (which allows us to pass in properties)
2. Render using the `renderRule` method:

> Takes a rule and some props to resolve the rule. If no props are passed it defaults to an empty object. It maps each declaration to unique atomic CSS classes and returns them combined.

Also, `renderRule` returns a class name.

3. Write styles to a `<style>` tag
4. Apply those styles by adding the saved class name

## Applying Fela to React

There is a `react-fela` library that contains a `Provider` that makes it fairly easy to bring Fela into the mix and pass the same renderer to all components. The `Provider` works kind of like Redux's `Provider`...so, you can wrap your code around Fela's and then Redux's. The result is all styles within a single `<style>` node. Let's check out some example files of this:

The `index.html`:

```
<!DOCTYPE html>
<html>
  <head>
    <style id="stylesheet"></style>
  </head>
  <body>
    <div id="main"></div>
    <script src="/main.js"></script>
  </body>
</html>
```

The root `main.jsx` file that gets compiled to `main.js`:

```
import React from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

// Custom component
import Title from './components/Title.jsx';

// Our style tag
const mountNode = document.getElementById('stylesheet');

// All components use this renderer
const renderer = createRenderer();

render(
  <Provider renderer={renderer} mountNode={mountNode}>
    <Title />
  </Provider>,
  document.getElementById('main')
);
```

And finally, our example custom component `Title.jsx`:

```
import React, { Component } from 'react';
import { createComponent } from 'react-fela';

const title = props => ({
  fontSize: props.fontSize + 'px',
  color: props.color
});

const Title = createComponent(title, 'div');

export default class Todo extends Component {
  render() {
    return (
      <Title fontSize={23} color='red'>
        Hello World
      </Title>
    );
  }
}
```

What gets outputted after the page renders?

```
<html>
  <head>
    <style id="stylesheet" data-fela-stylesheet="">.a{font-size:23px}.b{color:red}</style>
  </head>
  <body>
    <div id="main"><div data-reactroot="" class="a b">Hello World</div></div>
    <script type="text/javascript" src="/main.js"></script>
  </body>
</html>
```

The razzle-dazzle is the `<style>` tag getting populated and the `class` attribute being added with appropriate classes.

## Themes

Fela comes with a `ThemeProvider` component, which "leverages React's context to pass the theme to all child elements." To use it, just wrap it around some components and they will inherit the styles:

```
const theme = {
  fontColor: 'green',
  fontSize: '30px'
}

const title = props => ({
  fontSize: props.theme.fontSize,
  color: props.theme.fontColor
})

<ThemeProvider theme={theme}>
  <Title>I got all of the styles from the theme! All the styles...the best styles.</Title>
</ThemeProvider>
```

You can even nest the `ThemeProvider`s. Cool.

## Pros

- Examples in React, React Native, Angular, TypeScript, and Inferno
- Generated CSS is all classes, so there is maximum code-reuse throughout your project
- Only generates CSS for components that are currently rendered—this means the fastest version of the page will always be served. Rendered CSS is cached for re-use.
- Supports media queries, pseudo classes, different types of selectors, keyframes and font-faces
- Has an API and many plugins to allow:
  - Vendor prefixing
  - Fallback value support
  - Automatically adds units to values if needed
  - Validation
  - Any other common add-ons
- Good [documentation](http://fela.js.org)
- Global styles if desired
- Support for themes via `context`
- Works with Hot Module Refresh (HMR)
- Allows [combining styles](http://fela.js.org/docs/advanced/CombinedRules.html) in a systematic way
- Claims of production ready

## Cons

- A downside to all classes is that they are not "nice" to play with...they are not meant to be altered or added on to in an external stylesheet (but you can bring in external stylesheets through Fela)
- Shorthand & Longhand properties can't be safely mixed (for example: `border` and `borderColor`)...a tool to warn you when this mixing occurs is coming "soon"
- Fairly new

## Integrating Fela into an Existing Stack

I see some benefits to adopting Fela into any stack, but particularly a React based one, like our very own MERNM Generator. The biggest win is getting media queries and some selectors like `:hover`. Overall, Fela makes writing CSS more flexible because it's just classes, you can write selectors for child elements (should you choose), and it comes with the most useful/common plugins (they even have a nice [web preset](https://github.com/rofrischmann/fela/tree/master/packages/fela-preset-web) that seems like all I'd need). Adding Fela into a stack would require reworking component styling and how themes are handled. For the MERNM Generator this would be fairly straight forward, except possibly with themes...but the Material-UI theme is flexible enough.

> The biggest win is getting media queries and some selectors like `:hover`

## Conclusion

Fela is an interesting tool for bringing JS and CSS together. Coming from the world of React styling, it seems Fela can fill in some feature gaps. I also liked the documentation for Fela, it seemed well put together. I would have liked to see a React/Fela full on example, but I could not find one anywhere...just snippets. This brings up another point—Fela does seem new, overall, so there's that to keep in mind when adopting a new tool. We always want to use battle-tested technologies, so to speak.

The amount of time to move to Fela for the gain (media queries and selectors, mainly), might be hard to stomach for some. If you have an existing project that does not need media queries or already handles them, you might put Fela on the back-burner. For new projects, integrating Fela seems like a great solution. Lastly, there are alternatives to Fela like [Radium](https://github.com/FormidableLabs/radium/). Radium supports media queries, selectors, fallback values, and autoprefixing—all with inline styles. Styling components in Radium looks similar to Fela's structure. With that said, I prefer Fela—platform agnostic, filling a `<style>` tag, and using classes.
