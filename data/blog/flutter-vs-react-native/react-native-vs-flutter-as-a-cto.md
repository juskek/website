![Alt text](images/image.png)
<!-- omit in toc -->
# Flutter vs React Native Dec 2023: As a CTO


> Which cross-platform framework should you choose as a junior dev, senior dev and CTO? (Updated Nov 2023)

- [1. Introduction](#1-introduction)
- [2. Flutter Wins: Complex UI and standardisation](#2-flutter-wins-complex-ui-and-standardisation)
  - [2.1. Flutter allows you to create highly complex UI, animations and design systems](#21-flutter-allows-you-to-create-highly-complex-ui-animations-and-design-systems)
  - [2.2. Flutter standardises UI behaviour on different platforms and devices](#22-flutter-standardises-ui-behaviour-on-different-platforms-and-devices)
- [3. React Native Wins: Resources, OTA updates and web support](#3-react-native-wins-resources-ota-updates-and-web-support)
  - [3.1. There are more JS packages than Dart packages](#31-there-are-more-js-packages-than-dart-packages)
  - [3.2. React Native uses native components](#32-react-native-uses-native-components)
  - [3.3. You can push updates over the air with React Native](#33-you-can-push-updates-over-the-air-with-react-native)
  - [3.4. Flutter Web SEO is lacking](#34-flutter-web-seo-is-lacking)
  - [3.5. There are more React Native experts](#35-there-are-more-react-native-experts)
- [4. Conclusion](#4-conclusion)

## 1. Introduction

<!-- VARIABLE:CTO_QUESTIONS -->
As a CTO, you are responsible for the technical direction of the company, and you need to make decisions that will help the company achieve its business goals. Some questions you may be concerned about are:

> - Does the framework have the features we need to achieve the business goal?
> - What can each framework do to help us achieve the goal with the least amount of resources?

## 2. Flutter Wins: Complex UI and standardisation
### 2.1. Flutter allows you to create highly complex UI, animations and design systems

Flutter’s ability to deliver complex UI and animations stems from the comprehensive set of widgets it offers. Flutter provides a whole suite of built-in animations, which can be controlled and configured to suit your specific needs.

<figure>
<img src="images/animations.gif" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Flutter has a wide range of built-in animations which can be configured to suit your specific needs.
<a href="https://pub.dev/packages/animations
">(Source)</a>
</figcaption>
</figure>
You can also create code-based animations for more complex visuals, such as the following radar chart.

<figure>
  <img src="images/radar.gif" alt="my alt text"/>
  <figcaption style="text-align: center; font-size: smaller;">
    Flutter provides a framework to create code-based animations like in d3js
    <a href="https://medium.com/geekculture/how-to-create-a-custom-staggered-animation-with-flutter-13803dea5659">(Source)</a>
  </figcaption>
</figure>


Even more complex animations with interactivity can also be implemented due to integrations with Lottie and Rive.

<figure>
  <img src="images/rive.gif" alt="my alt text"/>
  <figcaption style="text-align: center; font-size: smaller;">
    Flutter + Rive allows you to create complex, interactive animations
    <a href="https://medium.com/flutter-community/rive-and-flutter-a-match-made-in-animation-heaven-episode-1-3d8a6535bda9">(Source)</a>
  </figcaption>
</figure>

<figure>
  <img src="images/scroll.gif" alt="my alt text"/>
  <figcaption style="text-align: center; font-size: smaller;">
    Implementing complex scroll animations is a breeze in Flutter
    <a href="https://dartpad.dev/workshops.html?webserver=https%3A%2F%2Fdartpad-workshops-io2021.web.app%2Fgetting_started_with_slivers&utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources#Step8">(Source)</a>
  </figcaption>
</figure>


The reason why Flutter excels in creating complex animations is because it essentially gives you a large canvas to render everything on to pixel-perfect accuracy. However, this approach comes with its own set of challenges, and one of the biggest concerns is SEO, which we will discuss in the next section.

### 2.2. Flutter standardises UI behaviour on different platforms and devices

As mentioned before, because Flutter uses its own rendering engine and canvas, there are two key advantages:

Consistent UI and UX across all platforms and devices can help to maintain brand image
Fewer resources spent on fixing platform and device-dependent bugs



## 3. React Native Wins: Resources, OTA updates and web support
### 3.1. There are more JS packages than Dart packages

To reiterate this again, the number of JS packages far outnumber Dart packages. This is also important from the perspective of a CTO because if your app requires some kind of package which will take a long time to develop in Dart, Flutter may be a deal breaker.


### 3.2. React Native uses native components

React Native’s approach to building user interfaces relies heavily on native components, which is one of its key features distinguishing it Flutter. This offers two key advantages:

The app's look and feel are consistent with other native applications on the user’s device.
By using native components, React Native leverages optimisations inherent in these components. This often results in better performance, as shown in this article: [Comparing iOS rendering performance: SwiftUI vs. React Native vs. Flutter](https://blog.theodo.com/2023/09/ios-rendering-performance/)



### 3.3. You can push updates over the air with React Native

One of the significant advantages of using React Native for mobile app development is the ability to push updates over the air (OTA). This feature allows developers to update their apps without going through the traditional app store approval and release process. This brings several benefits:

Bug fixes, small tweaks, rollbacks and new features can be deployed rapidly
Users get updates as soon as they open the app, without needing to manually go to the app store
While powerful, OTA updates have limitations. Major changes, especially or adding new permissions, still require a traditional app store release.

### 3.4. Flutter Web SEO is lacking

If you think that React SPAs are bad for SEO, think again. Flutter SPAs have notoriously bad SEO, and the [docs](https://docs.flutter.dev/platform-integration/web/faq#search-engine-optimization-seo) even recommend that you should avoid trying to use Flutter Web if you have content that needs to be optimised for search engines:

> In general, Flutter is geared towards dynamic application experiences. Flutter’s web support is no exception. Flutter web prioritizes performance, fidelity, and consistency. This means application output does not align with what search engines need to properly index. For web content that is static or document-like, we recommend using HTML — just like we do on [flutter.dev](https://flutter.dev/), [dart.dev](https://dart.dev/), and [pub.dev](https://pub.dev/). You should also consider separating your primary application experience — created in Flutter — from your landing page, marketing content, and help content — created using search-engine optimized HTML.


<figure>
<img src="images/image-1.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">SEO does not work with Flutter because everything is painted on a canvas object
</figcaption>
</figure>


The problem with SEO in Flutter is due to the usage of canvas objects to render content ([this video](https://www.youtube.com/watch?v=13XvM_zoye8&ab_channel=Aspiiire) has a visual explanation of the issue). Regardless of whether you use the HTML or CanvasKit renderer, Flutter will still render your content in a <canvas/> container, which means that search engine crawlers will not be able to see your content.

While React Native SPAs are not the optimal approach to SEO, they are at least still supported by Google crawlers. You get the benefit of having a universal app that works on both web and mobile, and if you are using Metro to compile to web, you get added SEO support.

### 3.5. There are more React Native experts

As mentioned before, Flutter has not been around as long as React and JS, which can be an issue when looking to hire Flutter devs. Although Flutter has been seeing a steady increase in adoption rate, an important factor to consider is the experience level of the market.


<figure>
<img src="images/image-2.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Cross-platform mobile frameworks used by software developers worldwide from 2019 to 2022
<a href="https://www.statista.com/statistics/869224/worldwide-software-developer-working-hours/">(Source: Statista)</a>
</figcaption>
</figure>


JavaScript has been a cornerstone of web development for decades, leading to a vast pool of developers who are familiar with it. React, introduced by Facebook in 2013, quickly became popular for building dynamic web applications, further expanding the JavaScript developer community. This long-standing presence can mean that there are more experienced developers and established best practices in the React and JavaScript ecosystem, and by extension React Native.

On the other hand, Flutter is relatively new in the market and Dart is less known compared to JavaScript — which can contribute to a lower concentration of Flutter experts when you are looking to hire.


<figure>
<img src="images/image-3.png" alt="my alt text"/>
<figcaption style="text-align: center; font-size: smaller;">Most used programming languages among developers worldwide as of 2023
<a href="https://www.statista.com/statistics/869224/worldwide-software-developer-working-hours/">(Source: Statista)</a>

</figcaption>
</figure>



## 4. Conclusion
<!-- VARIABLE:INDIVIDUAL_PERSPECTIVE_CONCLUSION -->
We've covered the differences between Flutter and React Native from a CTO's perspective, which can be summarised as:

<!-- VARIABLE:CTO_SUMMARY -->
- Flutter excels in complex UI and UI standardisation. This is beneficial if complex animations are a key requirement for your app, and UI consistency is important to your brand image. Also, Flutter’s UI standardisation can help to reduce the number of bugs and resources spent on fixing platform and device-dependent bugs.
- React Native excels in the amount of resources, web support and OTA updates. Again, the fact that someone else has already solved your problem means that you can save dev time and resources. Additionally, web support means that you can deploy to the web with SEO, which is a key advantage over Flutter. Finally, OTA updates allow you to push updates to your users without going through the app store review process, which can be a huge time saver.

<!-- VARIABLE:REFER_TO_MAIN_ARTICLE_CONCLUSION -->
If you're interested in learning more about the differences between Flutter and React Native from different experience levels, as well as some use cases for each framework, check out the main article, [Flutter vs React Native Dec 2023: A guide from every experience level](../0-main/react-native-vs-flutter.md).

