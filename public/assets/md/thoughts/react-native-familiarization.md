For those familiar with coding in React and looking to immediately start writing a native iOS or Android app, Facebook would love for you to try [React Native](https://facebook.github.io/react-native/). React Native allows you to code in JavaScript, JSX, and CSS, for the most part, but end up with a native application that is fast on phones and tablets.

## A Quick Overview

If you are hesitant to start React Native, I assure you it's not so bad...it's almost exactly like working on a React Single Page Application. Converting a web app into a native app? With React Native code from actions and reducers can be shared between iOS/Android (native) and browser, but components do not translate. For example, in native apps we get access to a `<Text>` component, but in browsers the equivalent might be a `<span>` or `<p>` tag—two separate templates must be used. Let's check out an example app and then breakdown some aspects of React Native...

## Getting Started

To generate a basic app and see it right away, get NPM and Xcode. Then run the following commands:

```
npm i -g react-native-cli
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

A console should pop-up along with the iOS simulator and your Awesome Project! What just happened? We used the `react-native init` command to generate a boilerplate. If we look into the contents of our newly created files, you can find `index.android.js` and `index.ios.js` files—as you might have guessed, this is where it all starts (depending on the platform).

![Awesome Project](/assets/img/thoughts/awesome-project.jpg)

A basic React Native app looks like this:

```
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

Similar to `render` within [ReactDOM](https://facebook.github.io/react/docs/react-dom.html), `AppRegistry.registerComponent` is usually used only once and starts the entire app.

Using the reference point of building a web app, lets check out details of using React Native...

## Compiling

Compiling is great with React Native. After modifying a file, a watcher recompiles your code. With the iOS Simulator up, `Command⌘ + R` will refresh and changes can be seen. The compiling tool comes with the React Native `init` package that was generated earlier.

## Standard Components

To give you an idea of what React components come with React Native, here's a list:

`ActivityIndicator` `Button` `DatePickerIOS` `DrawerLayoutAndroid` `Image` `KeyboardAvoidingView` `ListView` `MapView` `Modal` `Navigator` `NavigatorIOS` `Picker` `PickerIOS` `ProgressBarAndroid` `ProgressViewIOS` `RefreshControl` `ScrollView` `SegmentedControlIOS` `Slider` `SnapshotViewIOS` `StatusBar` `Switch` `TabBarIOS` `TabBarIOS.Item` `Text` `TextInput` `ToolbarAndroid` `TouchableHighlight` `TouchableNativeFeedback` `TouchableOpacity` `TouchableWithoutFeedback` `View` `ViewPagerAndroid` `WebView`

It's not a lot, but there are a lot of additional libraries out there to build that list. Another thing to keep in mind is that these are just basic building blocks that can be used to construct custom components. For coders coming from a browser perspective, `h1` and `p` tags are used to represent types of content for Search Engine Optimization (SEO) and accessibility purposes—accessibility in React Native is [documented](https://facebook.github.io/react-native/docs/accessibility.html), but SEO is neither here nor there for an app. So how does one style a component?

## Styling and Structure

Styling is through the `style` attribute in React Native, just like it is in React for the browser (`background-color` in CSS is `backgroundColor` in JavaScript). Out of the box there is not an option to use external CSS, but you can group styles in objects and pass them on as a `prop` or directly, like so:

```
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: theme.placeholderTextColor,
    fontSize: theme.fontSizeH5,
  }
});

export default class SoStylish extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
```

Why use `StyleSheet.create` at all instead of regular JavaScript objects? It is more performant, according to the [docs](https://facebook.github.io/react-native/docs/stylesheet.html).

Structure, such as grids and layout, is implemented through flexbox in much the same way as CSS flexbox. Facebook notes "Flexbox works the same way...with a few exceptions. The defaults are different, with flexDirection defaulting to column instead of row, and the flex parameter only supporting a single number." Overall styling is great, because flexbox is great! At least I think so.

## External Data

React native comes with a `fetch` utility that returns a `Promise`. There are other libraries out there as well, but this gives you the basics:

```
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

There is also support for WebSockets and direct access to the XMLHttpRequest API.

## Navigation

Navigation is quite a large subject to cover, but here are some notes:

- There is a concept of a "scene": "A scene is nothing other than a React component that is typically rendered full screen"...so a single `Text` component would generally not be a scene
- There is a built in `Navigator` component which has `initialRoute` and `renderScene` props
- The `Navigator` can pass functions telling how child components can change scenes

There's more to research here and probably some good custom components others have built that could be reused for different types of menus. One example is [React Native Side Menu](https://github.com/react-native-community/react-native-side-menu).

## Considerations

Thinking about adding React Native to an existing project? Here are some considerations:

- New templates for all pages would be required
- Any theming may need to be altered, but mostly reusable
- Reducers should not need altering
- Gulp tasks would need updating
- Actions would need altering for allowing native compatibility, in particular any ajax calls. This could be done with a library that supports browsers and native code.
- It helps to be comfortable with all stages of the deployment process, particularly building a finalized version
- New testing strategies might be needed for the React Native code and the created app

## Pros

- Adds ability to create iOS and Android apps
- Reuse redux-based code and some theming
- Easy to code if you are familiar with React/JSX or JavaScript in general
- Easy styling through CSS properties
- Supported by Facebook, which is not going anywhere
- Decent amount of community support (including components to easily add in)
- Fast builds
- Lots of NPM libraries to utilize

## Cons

- Working in advanced features requires diving into Swift—it's hard to know how quickly this barrier is hit
- Animations in React aren't easy...React Native animations are probably rough too
- Most components will require writing their own React Native version: basic building blocks (images, text, etc) are defined differently in React Native compared to browsers
- Tied-in to React ecosystem

## MERNM Generator Integration

Using React Native is a very approachable way to buildings native iOS/Android apps. Using the MERNM generator is a great way to quickly build a prototype or as foundation for a production ready web app. If a team using MERNM decides they want to also provide a native app to users, bringing in React Native is a great option to have. There is code reuse for what some might consider the hardest parts of an app (the actions and handlers). And, building out styles and components is in a familiar technology (CSS and JSX). This goes the other way around too: building from React Native allows easily portability to creating a great web experience in the React ecosystem. It's nice to know there are options!

## Wrap-Up

Folding React Native into an existing project is very possible, but it is a bit of an unknown world. There are optimizations that might not be known and an entire React Native community to become familiar with. There's also other solutions out there, like [Ionic](http://ionicframework.com/), to consider. I see great appeal in using anything related to React, including React Native: it's fast, easy to follow, you get to use [Redux](https://github.com/reactjs/redux), and there is a lot of community support. I hold some hesitation though, because it's not just JavaScript anymore.
