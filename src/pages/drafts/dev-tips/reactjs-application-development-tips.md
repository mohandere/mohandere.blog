---
title: Reactjs application development tips
date: 2021/2/01
tag: react
description: A list of React js application dev tips
---

# Reactjs application development tips

In this article, I've summarized a few tips for writing better Reactjs applications. I've collected these tips while working on React/Nextjs applications over time. I hope this will be helpful to you.


### Tip

Q: What are some helpful patterns/concepts/principles are useful while building React apps?

A:
- [SOLID](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688)
- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [Publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
- [Tree - data structure](https://en.wikipedia.org/wiki/Tree_(data_structure)#:~:text=A%20tree%20data%20structure%20can,none%20points%20to%20the%20root.)
- [Functional Programming Fundamentals](https://www.matthewgerstman.com/tech/functional-programming-fundamentals/)
- [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)


### Tip

Q: How to think in React?

A:
Please read this [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) offical documentation page.


### Tip

Q: What are some important js concepts should be known to build React apps?

A:
- [Objects, Array, Collections](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md#chapter-3-objects)
- [Modules](https://devhints.io/es6#modules)
- Arrow function
- Spread operator
- Destructuring Assignment
- Objects, Array, Collections - merging
- Objects, Array, Collections - shallow and deep comparison
- [Classes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md#building)
- [Promises](https://developers.google.com/web/fundamentals/primers/promises)
- etc


### Tip

Q: Why should create/develop tiny components?

A:
Small components are easier to understand, test, and maintain.

- [Components Should Be Focused, Independent, Reusable, Small & Testable](https://addyosmani.com/first/)
- [Tiny Components](https://blog.bitsrc.io/tiny-components-what-can-go-wrong-d6aa42d71370)


### Tip

Q: What are different types of components? Why should we logically seperate them out?

A:
- [Container and Presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- Functional Components
- Class Components
- Higher-Order Components
- Smart/Dumb Components

### Tip

Q: When to use `React.PureComponent` or `React.Component`?

A:
- [When to use Component or PureComponent](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
- [What is React.PureComponent and when to use it](https://ozmoroz.com/2018/09/what-is-purecomponent/)


Example:
```jsx
class Home extends React.PureComponent
// Instead of
class Home extends React.Component
```

### Tip

Q: When to use `useRef` or `useState` hooks?

A:
Use `refs` instead of `state` if you don't want to re-render component.

- [useRef vs useState: Should we re-render or not?](https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/)


### Tip

Q: When to use functional components(and hooks)?

A: Prefer functional components(and hooks) unless you need class components/React hooks will solves the problem of needing life cycle method.

- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889#:~:text=If%20the%20React%20community%20embraces,order%20components%2C%20and%20render%20props.)
- [Why We Switched to React Hooks](https://blog.bitsrc.io/why-we-switched-to-react-hooks-48798c42c7f)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)


### Tip

If you are doing any async calls from `componentDidMount`, then might see below warning in your console.

*Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.*

To fix this please follow this link - https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/

### Tip

While rendering lists, you need to pass 'key' prop while iterating over items, don't use current index as key instead, try to use unique value(number or string) from current item or use extenal unique id generation libs like -

```jsx
import shortid from  "shortid";

<Comment  key={shortid.generate()} /> OR
<Comment  key={comment.ID} />

```


### Tip

Dependency optimization - Don't import whole library if you need only few functions from it.

Example

```jsx
import _ from 'lodash;
// instead do
import toString from 'lodash/toString';
```

### Tip

Split code with `React.lazy` and use `Suspense` for off-screen components.

You can also use route-based and/or component-based code splitting techniques.


```jsx
import React, { lazy, Suspense } from 'react';
const AvatarComponent = lazy(() => import('./AvatarComponent'));
const renderLoader = () => <p>Loading</p>;
const DetailsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <AvatarComponent />
  </Suspense>
)
```
How to - [link](https://web.dev/code-splitting-suspense)


### Tip

*Use `React.Fragment` over unnecessary `<div>`*

Don't add unnecessary dom element if you just want to wrap code.

Example -

```jsx
render() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```


### Tip

*Rendering large dataset? You can virtualize large lists.(think of tweets of Twitter)*

[react-window](https://github.com/bvaughn/react-window) comes with components for efficiently rendering large lists and tabular data.

How to - [link](https://web.dev/virtualize-long-lists-react-window/)

### Tip

*Use `constructor` to bind event handlers instead of `render` function.*

```jsx
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProductIndex: 0
    };
    this.onProductSelect = this.onProductSelect.bind(this);
  }
  ...
}
```

### Tip

*Don't fetch it again, intead store it in global state/cache it.*

For this you can use -
- React's [context api](https://reactjs.org/docs/context.html) to manage state of you sub-tree
- global state management frameworks like [redux](https://redux.js.org)
- libraries like [react-query](https://github.com/tannerlinsley/react-query) to fetch data and cache it.
- etc

```jsx
componentDidMount() {
  let { users } = this.props;
  // Means we've already fetched users, don't do it again
  if (users.length) {
    return;
  }
  // Get users from server
  this.props.getUsers();
}
```

### Tip

Always use [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html) to catch app runtime errors.


### Tip

Try to avoid HOCs and Render props whenever possible. To solve such use-cases prefer React hooks.

### Tip

Use [react-devtool](https://reactjs.org/blog/2019/08/15/new-react-devtools.html) to debug performance.

### Tip

*Analyze your bundle size and code bloat*

Use [Source map explorer](https://www.npmjs.com/package/source-map-explorer)

```javascript
source-map-explorer bundle.min.js
source-map-explorer bundle.min.js bundle.min.js.map
source-map-explorer '*.js'
```
How to - [link](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Tip

use `useMemo` and `useCallback` hooks to memorize heavy compulations, to cache repetitive components to prevent unnecessary re-renders.

### Tip

*Try not use dom manipulation libraries like [jQuery](http://jquery.com/), prefer plain javascript over.*

May [YOU MIGHT NOT NEED JQUER](http://youmightnotneedjquery.com/) project will help here!

Well don't access DOM directly, instead use refs api.

### Tip

Use [Testing library](https://testing-library.com/docs/react-testing-library/intro) instead of Enzyme or any other testing library. Reason is [here](https://testing-library.com/docs/react-testing-library/intro#the-problem).

### Tip

[Don't test implementation details](https://kentcdodds.com/blog/testing-implementation-details)

### Tip

*Don't pass it/store it, if you don't need it!*

Don't pass unnecessary props to child components, don't save unnecessary states if you don't need them!

```jsx
render() {
  return (
    <>
      <WrappedComponent {...this.props} />
    </>
  )
}
```

### Tip

Data mutation can cost, use [pure functions](https://en.wikipedia.org/wiki/Pure_function) and DRY.

Use [Lodash js](https://lodash.com/) utility library for all kind of operations.

### Tip

Prefer [css-in-js](https://cssinjs.org/?v=v10.0.0-alpha.16) libraries like [styled-components](https://www.styled-components.com/) over css/less/scss files.

“CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files. Read a comparison of CSS-in-JS libraries [here](https://github.com/MicheleBertoli/css-in-js).

### Tip

*Better to organize your app.*

How to - [link](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

### Tip

Use [classnames](https://www.npmjs.com/package/classnames) for naming dynamic class names or conditionally joining classNames together.

or can prefer [clsx](https://www.npmjs.com/package/clsx).

### Tip

Prefer [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance).

### Tip

Use `Link` instead of `router.push` because there is a huge problem when it comes to accessibility here.

```jsx
function ClickButton(props) {
  return (
    <Link to="/next-page">
      <span>Go to next page</span>
    </Link>
  );
}
```

### Tip

Create new `useEffect` block to seprate concerns.

```jsx
useEffect(() => {
  // Data fetching
}, []);

useEffect(() => {
  // Some other logic
}, []);

```

### Tip

*Use service worker for caching assets.*

How to - [link](https://web.dev/precache-with-workbox-react/)

[Workbox](https://developers.google.com/web/tools/workbox/) is tool to generate service worker.


### Tip

*Understand React internals, VDOM.*

Read [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)


### Tip

Advantages of using Web components -

- Reusable
- Maintainable
- Platform independent.
- Composability - compose applications using smaller chunks
- Encapsulation mechanism - Private scope
- Extensibility
- Testing
- Productivity


Hope above tips will be helpful for you to write better React apps.


Thanks.