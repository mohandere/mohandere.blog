---
title: Tip - How to use React Context
date: 2021/06/01
tag: react
description: How better use of React context along with hook
---

# Tip - How to use React Context

In React applications we can manage whole state of application using context APIs along with hooks. Let's take an
example of `e-commerce` app. In e-commerce app we can have below features/modules

- Home
- Catalog
- Cart
- Checkout
- Payment
- Notifications
- etc

so we write a code, we can create `context` per feature to have distinct boundaries between modules. It may look like this

```tsx
/src
  /home
  /catalog
      CatalogContext.tsx
      index.tsx
  /cart
      CartContext.tsx
      index.tsx
  /checkout
      CheckoutContext.tsx
      index.tsx
  /payment
      PaymentContext.tsx
      index.tsx
  AppContext.tsx
  App.tsx
  ...

```

For shared state between modules, we can create `AppContext`.
Also for auth/user data, we can have `UserContext` / `AuthContext`.

Let's start with defining `AppContext`. For that will create a file `AppContext/AppContext.ts` with below sample code.

```tsx
// AppContext/AppContext.ts

import React, { useReducer } from "react";
import { SET_IS_NET_CONNECTED } from "./actionTypes";

type State = {
  isNetConnected: boolean;
};

type Action = {
  type: typeof SET_IS_NET_CONNECTED;
  isNetConnected: boolean;
};

type Dispatch = (action: Action) => void;
type AppProviderProps = { children: React.ReactNode };

const initialState = {
  isNetConnected: true,
};

export const AppContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_IS_NET_CONNECTED: {
      return {
        ...state,
        isNetConnected: action.isNetConnected,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// our App Provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook
export const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
```

Where action types could be `AppContext/actionTypes.ts`

```ts
// AppContext/actionTypes.ts
export const SET_IS_NET_CONNECTED = "SET_IS_NET_CONNECTED";
```

That's all!

Finally we have to use `AppContext` in 'src/App.ts'

```tsx
// src/App.ts

import React from "react";
import { AppProvider, useApp } from './AppContext.tsx';
import { AuthProvider } from './AuthContext.tsx';
import { UserProvider } from './UserContext.tsx';
import Routes from "./Routes";

const App = () => {
  const { state, dispatch } = useApp();
  // ...

  return (
    <div>
      <AppProvider>
        <AuthProvider>
          <UserProvider>
            <Routes />
          </UserProvider>
        </AuthProvider>
      <AppProvider>
    </div>
  );
};
```

Further in each module's `index.js`, we can have same signature of `App.js` which it's own context provider.
For example in catalog module

```tsx
// src/catalog/index.ts

import React from "react";
import Routes from "./Routes";
import { CatalogProvider, useCatalog } from './CatalogContext.tsx';

const Catalog = () => {
  const { state, dispatch } = useCatalog();
  ...

  return (
    <div>
      <CatalogProvider>
        <Routes />
      </CatalogProvider>
    </div>
  );
};
```

Thanks.
