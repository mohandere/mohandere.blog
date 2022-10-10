---
title: Tip - How to write React HOC using Hooks in TypeScript
date: 2021/07/01
tag: react
description: Let's say we want a search functionality to be used across multiple components. So may be we can create HOC called `withSearch`.
---

# Tip - How to write React HOC using Hooks in TypeScript

In React applications sometimes we want a simple way to inject props from somewhere else (either a global store or a provider)
and don't want to end up having prop drilling problem.
Context is great for it, but then the values from the context can only be used in your render function.
A HoC will provide these values as props.

Let's say we want a search functionality to be used across multiple components. So may be we can create HOC called `withSearch`.

Here is an example in TS:

```tsx
import React, { useState } from "react";
import { Input, Box } from "@chakra-ui/react";

type WithSearchProps = {};

function withSearch<T extends WithSearchProps = WithSearchProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithSearch = (props: Omit<T, keyof WithSearchProps>) => {
    const [query, setQuery] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
      setQuery(e.target.value);

    return (
      <Box as="section">
        <Box as="form" mb={6}>
          <Input
            name="search"
            value={query}
            placeholder="Search "
            onChange={onChangeHandler}
          />
        </Box>
        <WrappedComponent {...(props as T)} />
      </Box>
    );
  };

  ComponentWithSearch.displayName = `withSearch(${displayName})`;

  return ComponentWithSearch;
}

export default withSearch;
```

Thanks!
