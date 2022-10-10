---
layout: $/layouts/post.astro
title: Web performance
date: 2020-04-10
image: https://images.unsplash.com/photo-1501772418-b33899635bca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
author: Mohan Dere
category: performance
tags:
- architecture
- front-end
- performance
description: Amazon and others found that 100 milliseconds of latency is responsible for 1% in sales. Flipkart triples time-on-site with Progressive Web App, 40% higher re-engagement rate. Web performance is not optional for frontend devs now.
---


For Web developers, [performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) isn't optional now. Performance plays a major role in the success of any online venture. [DoubleClick](https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/) by Google found 53% of mobile site visits were abandoned if a page took longer than 3 seconds to load.

Amazon and others found that 100 milliseconds of latency is responsible for 1% in sales. Flipkart triples time-on-site with Progressive Web App, 40% higher re-engagement rate.

Pinterest increased search engine traffic and sign-ups by 15% when they reduced perceived wait times by 40% and many more examples are there.

## Improving performance

In this post, I am jotting down some [loading performance](https://developers.google.com/web/fundamentals/performance/get-started/) techniques helpful for Web developers to consider while building websites/web apps.

### Setting up Performance Budget

> A performance budget is a limit for pages which the team is not allowed to exceed. It could be a max JavaScript bundle size, total image weight, a specific load time (e.g Time-to-Interactive in under 5s on 3G/4G) or threshold on any number of other metrics. -- @addyosmani

Follow below link on how to set the performance budget.

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) by [@addyosmani](https://mobile.twitter.com/addyosmani)
- [Setting and Calculating a Web Performance Budget](https://www.keycdn.com/blog/web-performance-budget#setting-a-web-performance-budget)


Now let's look at top 3 performance essentials for web developers -

### 1. JavaScript

> The JavaScript is the most expensive resource, see [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) by [@addyosmani](https://mobile.twitter.com/addyosmani)

Strategies deliver JavaScript efficiently -

  - Consider implementing [code-splitting](https://webpack.js.org/guides/code-splitting/)
  - [Trim your JavaScript bundles](https://nolanlawson.com/2018/03/20/smaller-lodash-bundles-with-webpack-and-babel/)
  - [Prioritize resources with Preload, Preconnect, Prefetch](https://developers.google.com/web/fundamentals/performance/resource-prioritization)
  - [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
  - [Embrace performance budgets](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)



### 2. Images

> Images often account for most of the downloaded bytes on a web page.

Below 4 things should be considered to deliver images efficiently

- Appropriate image format
- Appropriate compression method
- Appropriate for display size and density according to viewport/device
- Load only necessary - lazy loaded

Techniques/guides -

- [images.guide](https://images.guide/)
- [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
- [SVG Will Save Us](https://svgontheweb.com/)
- [Lazy loading](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
-- [Native image lazy-loading](https://addyosmani.com/blog/lazy-loading/) is coming for the web.


Native image lazy-loading example -

```html
<img src="celebration.jpg" loading="lazy" alt="..." />
<iframe src="video-player.html" loading="lazy"></iframe>
```


### 3. Fonts

> Minimise flash of fonts

- [Controlling Font Performance with font-display](https://developers.google.com/web/updates/2016/02/font-display)
- [`font-display` for the Masses](https://css-tricks.com/font-display-masses/)


Let's cover up additional approaches as well.


### 4. Converting your website/apps to [PWAs](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

> Progressive Web Apps are experiences that combine the best of the web and the best of apps. -- Google Web

Using these experiences we can build reliable, fast and engaging websites/web apps. [Service workers](https://developers.google.com/web/fundamentals/primers/service-workers/) enable a Progressive Web App to load instantly, regardless of the network state. The service worker is like a client-side proxy, allows to control the cache and how to respond to resource requests.

Read [The Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/) for more on Offline experience for Web and Service worker.

**Top 5 Service Worker Essentials for Web Developers**

[Here](https://www.youtube.com/watch?v=IBpQlNeq5-o&index=3&list=PLNYkxOF6rcIDjlCx1PcphPpmf43aKOAdF&t=0s) is a Youtube video from Chrome Dev Summit 2018.

### 5. Best rendering technique

- [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
- [Architect your App Shell](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#2)


### 6. Some other techniques

- [HTTP Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- [Optimizing Encoding](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)


## Tooling

- [Chrome dev tool - Audit, Performance, Memory, JavaScript profiler, Coverage, Performance monitor, Network](https://developers.google.com/web/tools/chrome-devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [webpagetest](https://www.webpagetest.org/)
- [pagespeed](https://developers.google.com/speed/pagespeed/module/)

Above are some most trusted tools/services most of the peoples using it.

### In Summary

*Client side perf improvements*

	- Js is the render blocking resource so reduce js / reduce main thread work
	- Reduce network requests
	- Uglify scripts
	- Do code splitting
	- Load scripts before body close
	- Reduce image sizes
	- Implement lazy loading for images/scripts/all resources
	- Use CSS Sprites
	- Inline images/data images
	- Put Stylesheets at the Top
	- Make JavaScript and CSS External
	- Use Preload, Preconnect, Prefetch

*Server side perf improvements*

	- Use better compression for resources like brotli
	- Use fast servers - memory and cpus
	- Use a Content Delivery Network
	- Add an Expires or a Cache-Control Header/Configure ETags
	- Reduce DNS Lookups/Avoid Redirects
	- Use http/2


Hope that was helpful on your journey.

Mohan