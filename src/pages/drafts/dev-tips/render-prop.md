---
title: React render prop Pattern
date: 2021/07/01
tag: react
description: React render prop is yet another technique for sharing code between React components next to HOC pattern.
---

# React render prop Pattern

React render prop is yet another technique for sharing code between React components next to HOC pattern.

Lets have a look at below code

```jsx
<MyComponent render={(data) => <h1>Hello {data.target}</h1>} />;

const MyComponent = ({ render }) => {
  const myData = {};

  // Reusable logic/code

  return render(myData);
};
```

Did you notice that `render` prop is nothing but a function which we are calling from `MyComponent` component with some data.

Now lets write above code using `children` prop, so will pass a `function` as child component to our `MyComponent`

```jsx
<MyComponent>{(data) => <h1>Hello {data.target}</h1>}</MyComponent>;

const MyComponent = ({ children }) => {
  const myData = {};

  // Reusable logic/code

  return children(myData);
};
```

hmm, looks much simpler?

This is the `render prop` pattern. The name render prop comes from the concept of passing `render` prop to component which is a function.
Like

```
render={(data) => <h1>Hello {data.target}</h1>}
```

### Example

```jsx
<Route path="/page" render={(props) => <Page {...props} data={extraProps} />} />
```

### Advantages?

This pattern is very useful when we want to share the same behavior(sharing code) among different components minimizing code repetitions.

Thanks!
