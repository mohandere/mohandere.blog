---
title: React - Why Did You Render?
date: 2021/3/20
tag: web, security
description: Your static objects/reference data types will cause react component to re-render unnecessary reason.
---

# React - Why Did You Render?

For Example:

```jsx
const Main = () => (
  ....
  <BigListPureComponent style={{width: '100%'}} {...manyOtherProps} />
)
```

Point to note is: always-new style object was passed to the component.

The problem with always-new style object is that: It will caus the whole list to re-render on every rendering of it’s father (Main). Even if none of the other props changed.

Because behind the scene React is doing comparison like:

```js
prevProps.style !== nextProps.style;
```

and the return value from this costly calculation is always true.

To fix this: Move all your static objects/reference data types to out of component like:

```jsx
const bigListStyle = {width: '100%'}
const Main = () => (
  ....
  <BigListPureComponent style={bigListStyle} {...manyOtherProps} />
)
```

Then it would not re-render when `Main` re-renders.

So bet is to move all your static objects/reference data types to out of component.

### Reference

- [why-did-you-render](https://github.com/welldone-software/why-did-you-render)

Thanks.
