![Alt text](images/image.png)
<!-- omit in toc -->
# Flutter vs React Native Dec 2023: As a Junior Dev

> This article is a subset of the main article, [Flutter vs React Native Dec 2023: A guide from every experience level](../0-main/react-native-vs-flutter.md), which is a high level comparison of Flutter and React Native from different experience levels and some use cases. This article goes into detail on the differences between Flutter and React Native from a junior developer’s perspective, and is meant to support the main article.



- [1. Introduction](#1-introduction)
- [2. Flutter Wins: Out-of-the-box DevX features and simple toolchain](#2-flutter-wins-out-of-the-box-devx-features-and-simple-toolchain)
  - [2.1. Flutter has convenient built-in systems](#21-flutter-has-convenient-built-in-systems)
  - [2.2. Flutter’s VSCode extension saves a lot of time](#22-flutters-vscode-extension-saves-a-lot-of-time)
  - [2.3. Diagnosing a bug in Flutter can be easier](#23-diagnosing-a-bug-in-flutter-can-be-easier)
  - [2.4. Type guards are not needed in Flutter](#24-type-guards-are-not-needed-in-flutter)
  - [2.5. Linting and formatting works out of the box with Flutter](#25-linting-and-formatting-works-out-of-the-box-with-flutter)
- [3. React Native Wins: Large community, resources and opportunities](#3-react-native-wins-large-community-resources-and-opportunities)
  - [3.1. Resolving a bug in React Native can be easier](#31-resolving-a-bug-in-react-native-can-be-easier)
  - [3.2. There are more JS packages than Dart packages](#32-there-are-more-js-packages-than-dart-packages)
  - [3.3. More opportunities with JS and React](#33-more-opportunities-with-js-and-react)
- [4. Other considerations](#4-other-considerations)
  - [4.1. React Native uses functional programming by convention, Flutter uses object-oriented programming by design](#41-react-native-uses-functional-programming-by-convention-flutter-uses-object-oriented-programming-by-design)
  - [4.2. Everything is a component/widget in Flutter, while React Native uses components and stylesheets](#42-everything-is-a-componentwidget-in-flutter-while-react-native-uses-components-and-stylesheets)
- [5. Conclusion](#5-conclusion)


## 1. Introduction
As a junior dev, your main responsibility is usually to bring value to users with the code you create. You may be inexperienced with the tools and frameworks, so the questions on your mind may be:

<!-- VARIABLE:JUNIOR_DEV_QUESTIONS -->
> - Which framework can provide the best developer experience (DevX) so that I can deliver value to users as quickly as possible?
> - Which framework will help me grow the most as a developer?
> - Which framework will help me get a job in the future?



## 2. Flutter Wins: Out-of-the-box DevX features and simple toolchain
### 2.1. Flutter has convenient built-in systems

There is a built-in system that you can use to manage your app themes, allowing you to set different fonts, colours and component behaviour for different modes (e.g. light/dark mode).


<figure>
<img src="images/image-3.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Flutter provides a structured system for managing themes (fonts, colours, light/dark/system mode)
</figcaption>
</figure>

I found package management to be a lot easier in Flutter as well. There is one package manager to rule them all in Flutter (flutter pub), but when I was working with Expo (a React Native framework) as a junior dev, I could accidentally switch between expo, yarn, npm and have to deal with dependency issues.

The built-in Material and Cupertino design systems also mean that components look really good out-of-the-box already, so you spend less time worrying about styling for your MVP upfront.

### 2.2. Flutter’s VSCode extension saves a lot of time

Another thing I loved about Flutter was its VSCode extension — you can generate commonly used boilerplate code with shortcuts,

<figure>
<img src="images/image-4.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">You can generate boilerplate code out of the box with the Flutter VSCode extension
</figcaption>
</figure>


get detailed code suggestions for component properties and the values it accepts,

<figure>
<img src="images/image-5.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">The Flutter VSCode extension provides detailed code suggestions for accepted options, colours etc.</figcaption>
</figure>

get detailed in-line docs for each component without leaving your code editor,

<figure>
<img src="images/image-6.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">You can get detailed docs by hovering over a Flutter component</figcaption>
</figure>


and access code actions for commonly performed operations.


<figure>
<img src="images/image-7.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">The Flutter VSCode extension provides code actions for commonly used operations.</figcaption>
</figure>



###  2.3. Diagnosing a bug in Flutter can be easier

Another thing I noticed was the difference in DevX when trying to debug in Flutter and React Native.

When I try to debug something in Flutter, my Google search might begin with `flutter <bug>`, or I’ll go to issues in the Flutter GitHub repository and search for the bug.

As a junior dev, when I tried to debug something in React Native, I would usually:

Google `<bug>` first,
Potentially see that it could be caused by different components in the toolchain,
Think about which component in the toolchain could be causing the issue, and
Add the components that I think are causing the bug to the search, e.g. `react native jest node babel <bug>`.
This multistage debugging process for React Native is because JavaScript’s ecosystem comprises numerous build tools, compilers, and frameworks that can interact in complex ways. This complexity means that bugs can arise from any number of sources, not solely the React Native framework itself. Therefore, it’s often necessary to consider the entire toolchain when diagnosing problems, which can be daunting for junior developers.


<figure>
<img src="images/image-8.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">The debugging process can be more complex due to the large ecosystem of tools, compilers and frameworks in React Native.
</figcaption>
</figure>

###  2.4. Type guards are not needed in Flutter


<figure>
<img src="images/image-9.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">You don’t need to use type guards in Dart because of its sound typing system.
</figcaption>
</figure>

Since JavaScript variables do not have a fixed type and can be reassigned to different types of values throughout the code, you can run into runtime errors due to unexpected types, which is where type guards come in. Type guards are conditional checks that serve as runtime checks to ensure that a variable is of a certain type before it’s used in a way that assumes that type.

In Dart, the programming language used by Flutter, type guards are not typically needed because Dart has a sound type system, which means that types are checked at compile time and variables can’t change type. This eliminates the need for such guards by enforcing types at compile time, reducing the potential for type-related bugs and simplifying the development process.

Dart’s type system also includes type inference, which can deduce the type of a variable without explicit type annotations. When you do need to check types at runtime in Dart, you can use the ‘is’ keyword, which is a straightforward and readable approach to type checking.

### 2.5. Linting and formatting works out of the box with Flutter

This is great for junior developers as the linter shows errors and best practices recommended by the Flutter/Dart team.

<figure>
<img src="images/image-10.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Linting works out of the box for Flutter but requires configuration and know-how for React Native
</figcaption>
</figure>

On the other hand, linting can be slightly more troublesome to set up and configure in React Native.

## 3. React Native Wins: Large community, resources and opportunities
### 3.1. Resolving a bug in React Native can be easier

One substantial advantage I noticed when working with React Native is the vast amount of resources available online. Whether it’s troubleshooting a bug, seeking best practices for performance optimization, or looking for innovative UI design implementations, there’s a high likelihood that someone has already encountered and solved the same problem.

There were many times in Flutter when there were no existing solutions for the problem I was facing, and I had to dive into the Flutter docs to figure out what was going on.

ChatGPT also works great when I’m trying to debug issues in React Native, but its effectiveness was limited with Flutter.

### 3.2. There are more JS packages than Dart packages

When it comes to the availability of third-party packages, React Native and Flutter present different ecosystems. There are over 1.3 million packages on npm alone, while Flutter’s [pub.dev](https://pub.dev/) only has 33 thousand packages. I’ve almost always found the React Native package I need on the first Google search, while there have been occasions where I had to [write my own Flutter package](https://github.com/Kek-Tech/flutter_google_maps_widget_cluster_markers).

<figure>
  <img src="images/maps.gif" alt="my alt text"/>
  <figcaption style="text-align: center; font-size: smaller;">
    The number of Flutter packages pales in comparison to React Native — I had to write my own package to implement dynamic markers on Google Maps.
  </figcaption>
</figure>

### 3.3. More opportunities with JS and React

Since Flutter is relatively new compared to React Native, investing your time in this rapidly evolving technology could be a way to become a Flutter expert in a less saturated market. However, it is a double-edged sword, since you are also exposed to the risk of fewer job opportunities and less support from community experts.

Learning React Native on the other hand can allow you to transition to web dev as well, which is the bread and butter of the dev market.

## 4. Other considerations
###  4.1. React Native uses functional programming by convention, Flutter uses object-oriented programming by design

Another factor that you may want to take into consideration is the programming paradigm. React has moved towards functional programming, while Flutter remains very much object-oriented.


<figure>
<img src="images/image-12.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">React uses functional components, while Flutter uses class components
</figcaption>
</figure>

While it is still possible to perform object-oriented programming in React with Javascript + Typescript, React recommends functional components over class components. This can lead to 2 different programming paradigms in your codebase; functionally programmed React components and object-oriented code in the rest of the codebase. Depending on your team’s preferred programming style, this can lead to inconsistent code style which can be confusing.

On a separate note, Flutter provides an avenue for you to learn OOP principles with mixins, interfaces and private variables. Depending on your intentions, this could

### 4.2. Everything is a component/widget in Flutter, while React Native uses components and stylesheets



<figure>
<img src="images/image-13.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Styling: React Native uses style sheets and components, while everything is a widget in Flutter.
</figcaption>
</figure>

In Flutter, the fundamental building block of the UI is a widget. Everything from a simple text string to an elaborate page layout is a widget, and these widgets nest within each other to build complex interfaces. This unified model fosters a consistent development approach where the properties, layout, and styling of UI elements are all defined within the widget’s code.

The widget-centric framework of Flutter simplifies the mental model for developers; they only need to think in terms of widgets and their configuration. This leads to a highly modular and reusable code structure, where the customization and functionality of components are encapsulated within self-contained widgets.

Conversely, React Native adopts a blend of components and stylesheets, where components define the structure and behaviour of UI elements, while separate stylesheets, resembling CSS, are used to style these components.

This separation can be beneficial for developers coming from a web background, providing a familiar environment to control the look and feel of an app. It also allows for the styling to be more dynamic and potentially shared across different components. However, this approach necessitates managing two different aspects of UI development, which can add complexity when building and maintaining large applications.


## 5. Conclusion

<!-- VARIABLE:INDIVIDUAL_PERSPECTIVE_CONCLUSION -->
We've covered the differences between Flutter and React Native from a junior developer's perspective, which can be summarised as:

<!-- VARIABLE:JUNIOR_DEV_SUMMARY -->
- Flutter excels at out-of-the-box DevX and a simple toolchain.
- React Native excels at the amount of resources and job opportunities available.
- Both frameworks will help you grow as a developer, but in different ways. For me,
  - I've spent more time learning about OOP and app architecture, in Dart/Flutter. This is because Flutter saved a lot of my dev time with its simplified toolchain, allowing me to spend more time on design patterns and codebase structure.
  - In JS/React Native, I've spent more time learning about the JS ecosystem and how to debug complicated toolchains, which is typically abstracted away in Flutter. This became a framework agnostic skill for me, but was frustrating to learn as a junior dev.

<!-- VARIABLE:REFER_TO_MAIN_ARTICLE_CONCLUSION -->
If you're interested in learning more about the differences between Flutter and React Native from different experience levels, as well as some use cases for each framework, check out the main article, [Flutter vs React Native Dec 2023: A guide from every experience level](../0-main/react-native-vs-flutter.md).