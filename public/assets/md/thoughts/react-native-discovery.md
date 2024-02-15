The following is a series of investigations into how one can structure a React Native application if they have an existing web application, what UI libraries are available, and what resources are out there for connecting a mobile application to a Bluetooth device.

---

## Structural Investigation

The goal of this investigation was to see what it would be like to bring React Native into an existing project...I wanted to answer:

- How much structure change would be required?
- What is needed for React Native code?
- How easy is it to _drop in_ that code?

### Folder Structure

My existing project had a `client` folder that housed everything the needed for the bundle of JavaScript the browser downloads. I changed the `client` folder to be divided up into `common`, `native`, and `browser`. This naming should be fairly straight forward, but inside each folder is where the interesting part is:

- `common` contains all actions, reducers, helpers, images, translations, and even some styles
- `browser` contains all UI components that were being used
- `native` currently only contains an `index.js` that is used by both Android and iOS—a gateway to all other native UI components

The `native` folder could be split into folders for Android and another for iOS—often design practices differ with platforms, but sometimes there is not budget and time to account for these differences. A simple structure change allows a whole new UI for Android/iOS.

### Integration

With the `client` structure in place, adding an option for React Native is simple. With this structure, the following actions would allow a React Native option:

- Add `client/native` folder
- Add `client/native/index.js` (naming inside needs to match project name)
- Add `app.json` (naming inside needs to match project name)
- Add `.watchmanconfig` (empty)
- Add `index.android.js` (imports `client/native/index.js`)
- Add `index.ios.js` (imports `client/native/index.js`)
- Modify `package.json` (add `react-native` and `babel-preset-react-native`)
- Create `ios` and `android` folders using `react-native eject`

I would not consider this _a lot_ of steps to add in React Native to a project. Of course, this is only the basics...adding in a routing library and all the UI is another process.

### Struggles

I came across some serious slow-downs when looking into this, mainly with trying to generate a React Native app without using the `react-native init` command. I did not want to use this command because:

1. It creates a folder and does not have an option to use the current folder, which would make it difficult to integrate into an existing project.
2. It has some extra stuff in it that is not needed

Creating the React Native necessities manually is quick, but only if you know what files need changing (I did not). Also, using the `react-native eject` command is fairly new, so I was lucky with my timing (2 months ago it did not exist). This also meant that I had to use a _newish_ version of React Native which currently depends on an alpha version of React (version 16 alpha).

---

## UI Investigation

The team I work on primarily uses Material UI, Google's design. I'm not a huge fan of the design as a whole, but it's what we use and it's not _that_ bad. I intended to discover what React Native UI kits are available and how good they are.

### Existing Kits/Libraries

The following UI kits are available to bring Material UI styling and functionality to React Native components. I tested the Card functionality of each one, because I feel that is a very basic place to start, but is a basic building block for a lot of Material UI design. From there I added a few buttons and documented the experience/impressions of using the library.

#### [React Native UI Components for Material Design](https://github.com/react-native-material-design/react-native-material-design)

- **Components:** Avatar, Button, Card, Checkbox, Checkbox Group, Drawer, Divider, Icon, Icon Button, List, Radio Button, Radio Button Group, Ripple, Subheader, Toolbar
- **Approach:** Components that are already styled
- **Experience:** Decent documentation, but could not get the example card's image to fit in screen.
- **Popularity and Activity**:
  - 2,028 downloads in the last month
  - Last commit on Jan 25, 2017
  - 47 open issues

#### [RN Material Kit](https://github.com/xinthink/react-native-material-kit)

- **Components:** Buttons, Cards, Loading (Progress bar, Spinner), Range Slider, Textfields, Toggles (Checkbox, Radio button, Icon toggle, Switch)
- **Approach:** Provided CSS styles (as a theme object) and components
- **Experience:** Medium documentation. There are examples, but some of them require some piecing together. Card image did not work, but was able to override with custom styles to make it work. Textfields not working, perhaps they work for older versions of React Native or with some tinkering, but I ran out of time.
- **Popularity and Activity**:
  - 5,609 downloads in the last month
  - Last commit on Feb 24, 2017
  - 95 open issues

#### [RN Material UI](https://github.com/xotahal/react-native-material-ui)

- **Components:** Action Button, Avatar, Badge, Bottom Navigation, Button, Card, Checkbox, Dialog, Divider, Drawer, Icon, Icon toggles, List item, Radio button, Subheader, Toolbar
- **Approach:** Components with a ThemeProvider (similar to MaterialUI package in MERNM)
- **Experience:** Good documentation with examples. Not complete, but worked decently for what was there.
- **Popularity and Activity**:
  - 1,797 downloads in the last month
  - Last commit on Apr 3, 2017
  - 45 open issues

#### [MRN](http://mrn.js.org/)

- **Components:** Avatar, Button, Checkbox, CheckboxGroup, Divider, Icon, IconButton, List, RadioButton, Ripple, Subheader, Toolbar
- **Approach:** Components
- **Experience:** Lots of documentation, but does not claim to support iOS and does not explain how to access components in a normal way (`import { Button } from 'mrn';`)...so I did not use it.
- **Popularity and Activity**:
  - 377 downloads in the last month
  - Last commit on Dec 3, 2015
  - 13 open issues

### Individual Component Approach

Because there is a mixed bag of components, some as you would expect, other's hardly useable, using a few different libraries and maybe some custom components might be the best approach. The issue here is using too many libraries (increasing overall bundle size) and keeping track of which library contains which _good_ component.

### My Team's Use

My team most often uses Cards, Buttons, and various types of input fields. Only one library, RN Material Kit, provided a wealth of input components (Radio, checkbox, text field, etc.), but I could not get a basic text field to work. My experience overall was far from the React Material UI library—which is great in many ways.

### Appropriate use of Material UI

For a web app, it is easy to argue that it is always appropriate to use Material UI. For Android phone applications, the same argument stands, because it is a Google platform. For iOS applications, there is a strong argument for not using Material UI, instead using native components and designs that abide by Apple's [design guidelines](https://developer.apple.com/design/). If I were to create an iOS application, I suggest alternatives to Material UI to allow an alternative go-to library of UI components that are iOS-design-friendly. With that in mind, I continued my search...

### Other UI Approaches

Here are some other UI related libraries/ I found. Nachos, React Native Elements, Native Base and Shoutem look great. They are not strictly Material UI, so they did not come into my radar at first.

- [Nachos UI](https://avocode.com/nachos-ui/): Good looking alternative to Material UI
- [Native Base](https://nativebase.io/): Creates components that change based on platform. Looks nice.
- [React Native Easy Grid](https://github.com/GeekyAnts/react-native-easy-grid): Grid system for react native...may not be necessary since you have flexbox already.
- [Este](https://github.com/este/este): Has basic components, but not opinionated about styling...more of an interesting approach for applying styles to building blocks.
- [React Native Elements](https://github.com/react-native-training/react-native-elements): Similar to Nachos and Native Base, a UI kit.
- [Tipsi](https://github.com/tipsi/tipsi-ui-kit): Good collection of odd and random functionality an app might need.
- [React Native UI Kitten](https://github.com/akveo/react-native-ui-kitten-demo-app): Lots of contrast and some decent UI components.
- [Shoutem](https://shoutem.github.io/ui/): Decent UI kit with good documentation.

I looked at all of them a bit and decided to try out Native Base, as I valued their approach: different styling to address the contrasting designs of iOS and Android. The documentation was very good, as good as any of the others, and all components I tested worked. I was able to get Cards, Forms, and Buttons to work with ease. I did not try out the Android versions (the design changes depending on the platform), but the iOS design gave me confidence in the library. Moving forward, I recommend using Native Base as a straight swap for Material UI when it comes to all React Native coding. It comes with some great theming options (even allowing Material UI on iOS, if you so desire) by using a StyleProvider component.

### Fonts

One random note about fonts...for iOS you must open the Xcode project and add them manually. There is a bit of figuring-things-out, but after that it is easy. Make sure your font is added to the root folder in the project, is part of the Info.plist, and added to the build process.

### Conclusion

There are actually some great React Native UI libraries out there...which is a relief. For me, the best options were Nachos UI, Shoutem, Native Base, and React Native Elements. Addressing design differences between platforms is a great asset, which is why Native Base stood out from the others. There is still plenty to learn, but it is not much different from learning Material UI components.

---

## Bluetooth Investigation

The goal for this investigation is to find the popular React Native Bluetooth libraries and get one of them to find my iPhone. With React Native we always have the opportunity to write Swift code, allowing any functionality we want, but let's explore what's out there first.

### Available Bluetooth Libraries

Here is a list of plugins for React Native Bluetooth support:

- [React Native BLE Manager](https://github.com/innoveit/react-native-ble-manager): port of Cordova BLE Central plugin
- [React Native BLE PLX](https://github.com/Polidea/react-native-ble-plx): library using RxBluetoothKit and RxAndroidBle as it's backend libraries
- [React Native Bluetooth Serial](https://github.com/rusel1989/react-native-bluetooth-serial): React Native version of BluetoothSerial plugin. For both android and ios.
- [React Native Easy Bluetooth](https://github.com/douglasjunior/react-native-easy-bluetooth): An React-Native wrapper for AndroidBluetoothLibrary (works for both Android and iOS, except classic only for Android)
- [react-native-ble](https://github.com/jacobrosenthal/react-native-ble): Central role ble for react native. Technically a shim for the excellent noble.

### Connecting to a Device

I attempted to use the React Native BLE PLX library. I chose this plugin because it claims to have been used in working applications and it did not have anything to do with Cordova. Unfortunately, I could not get it to build using `react-native run-ios`. Despite following all the steps as best I could, I ran out of time in my investigation for a technology may not even be need in my projects.

### Side Note: Cordova Plugin Support

Interested in using a Cordova plugin on your React Native app? There's a library called [React-Native Cordova Plugin Adapter](https://github.com/axemclion/react-native-cordova-plugin) for that.
