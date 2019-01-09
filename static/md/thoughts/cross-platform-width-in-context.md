I have been working with [React Native Web](https://github.com/necolas/react-native-web) (RNW) and came across a need for Media Query-like behavior within components. While working on cross-platform components, sometimes a component needs to know what the dimensions of the screen are. Luckily, RNW comes with handy [Dimensions](https://necolas.github.io/react-native-web/storybook/?selectedKind=APIs&selectedStory=Dimensions&full=0&addons=0&stories=1&panelRight=0) API and React now has a [Context](https://reactjs.org/docs/context.html) API. With these two combined, the sky is the limit!

## Code
To get started, create a Context component. I did it like this:

```
import React from 'react';

export default React.createContext({
  width: 0,
  height: 0,
});
```

Next, we will need to modify our highest-up component...for my code's structure, that is an `App.js` file, which sits above all other files. Here is a rundown of the changes:
- create state which will store the *current* height and width of the browser
- create a listener that will react to changes in the browser dimension
- wrap the Provider (loaded it up with the width and height) around child components

```
import React from 'react';
import { throttle, get } from 'lodash';
import { Dimensions } from 'react-native-web';
import DimensionsContext from '../DimensionsContext';

const throttledOnDimensionsChange = throttle(callback => callback(), 1000, {
  trailing: true,
});

class App extends React.PureComponent {
  state = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
  componentDidMount() {
    Dimensions.addEventListener('change', () => this.onDimensionsChange());
  }
  componentWillUnmount() {
    Dimensions.removeEventListener('change', () => this.onDimensionsChange());
  }
  onDimensionsChange() {
    throttledOnDimensionsChange(() => {
      const { height, width } = Dimensions.get('window');
      this.setState({ height, width });
    });
  }
  render() {
    ...
    const { height, width } = this.state;

    return (
      <DimensionsContext.Provider value={{ height, width }}>
        ...
      </DimensionsContext.Provider>
    );
  }
}
```
A couple notes from the code above:
- [Lodash](https://lodash.com) is used to throttle the dimensions changes...this ensures we are not re-rendering too quickly when a user resizes their browser
- [Lodash](https://lodash.com) is also used to get the width and height...this is probably not required, but it provides a little safety

With the top component all set, the next step is to start using the Consumer. This is easy work within a component:

```
...
import DimensionsContext from '../DimensionsContext';

const SomeComponent = () => (
  <DimensionsContext.Consumer>
    {({ width }) => (
      <View style={width < 800 ? styles.containerMobile : styles.container}>
        ...
      </View>
    )}
  </DimensionsContext.Consumer>
);
```

By wrapping the component in `DimensionsContext.Consumer` the component now has access to a dynamic width, which will cause the component to re-render when the width changes. This is very helpful, because now the width property can be used to toggle styles on and off and do other Media Query-like actions.

## Notes
- It's worth mentioning that wrapping a lot of components in `DimensionsContext.Consumer` could be a slow-down—I do not know and I have not tested it thoroughly. From the limited experience I have with it, the UI remained quick and it was not an issue.
- If you are not using RNW, this technique and definitely be implemented a bit more manually, but this solution should be cross-platform friendly.
