---
title: Tip - When to use useReducer hook in React
date: 2021/2/26
tag: react
description: useReducer is usually preferable to useState when You have complex state logic that involves multiple sub-values
---

# Tip - When to use useReducer hook in React

```js
const [state, dispatch] = useReducer(reducer, initialState, lazyInitState);
```

Here are the basic rules we can follow while choosing between them

- **useState** - When it's just an independent element of state you are managing
- **useReducer** - When one element of your state relies on the value of another element of your state in order to update

#### Example

We have 2 independent states like below

```js
const [refreshDashboard, setRefreshDashboard] = useState<boolean>(false);
const [hasInternetConnection, setHasInternetConnection] = useState<boolean>(
  true,
);

```

Let's say our `user` state is depends on `accounts`

```js
const stateReducer = (state, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: {
          ...action.payload,
        }
        numberOfAccounts: state.accounts.length,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
const [state, dispatch] = useReducer(stateReducer, {
  user: { id: 1, numberOfAccounts: 0 },
  accounts: [],
});
```

So [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) is usually preferable to [useState](https://reactjs.org/docs/hooks-reference.html#usestate) when:

- You have complex state logic that involves multiple sub-values
- The next state depends on the previous one
- Complex state transitions
- Different properties tied together that should be managed in one state object
- Need for an easier time testing it
- Need for a more predictable and maintainable state architecture

Thanks!
