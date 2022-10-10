---
title: Tip - How to use debounce and throttle in React with hooks
date: 2021/2/30
tag: react
description: We can use `useCallback` along with `throttle` or `debounce` to implement delayed effect
---

# Tip - How to use debounce and throttle in React with hooks

Let's take example of `Input` component.

```jsx
const Input = () => {
  const [userName, setUserName] = React.useState("");
  const onUserNameChange = ({ target: { value } }) => setUserName(value);
  return (
    <>
      <input type="text" value={userName} onChange={onUserNameChange} />
    </>
  );
};
```

### Approach 1

Using `useDebouncedEffect`

```jsx
import React, { useState } from "react";
import useDebouncedEffect from "use-debounced-effect";

export default function Input() {
  const [userName, setUserName] = React.useState("");

  useDebouncedEffect(
    () => {
      console.log(userName); // debounced 1sec
      // call your api ...
      // return () => maybe cancel prev req
    },
    1000,
    [userName]
  );

  const onUserNameChange = ({ target: { value } }) => setUserName(value);
  return <input value={userName} onChange={onUserNameChange} />;
}
```

### Approach 2

Using `useCallback`

```jsx
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

const Input = () => {
  const [userName, setUserName] = useState("");

  const debouncedOnUserNameChange = useCallback(
    debounce(value ==> console.log(value), 1000),
    []
  );
  useEffect(() => debouncedOnUserNameChange(userName), [userName]);

  const onUserNameChange = ({ target: { value } }) => setUserName(value);

  return <input type="text" value={userName} onChange={onUserNameChange} />;
};

```

### Approach 3

Using `useRef`

```jsx
import React, { useRef, useEffect, useState } from "react";
import debounce from "lodash.debounce";

const Input = () => {
  const [userName, setUserName] = useState("");

  const debouncedOnUserNameChange = useRef(
    debounce((value) => console.log(value), 1000)
  );

  useEffect(() => debouncedOnUserNameChange.current(userName), [userName]);

  const onUserNameChange = ({ target: { value } }) => setUserName(value);

  return return <input type="text" value={userName} onChange={onUserNameChange} />;
};
```

Thanks!
