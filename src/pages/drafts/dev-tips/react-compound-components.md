---
title: React Compound Components Pattern
date: 2021/07/12
tag: react
description: The objective of the compound component pattern is to have a clearer, more expressive and flexible api.
---

# React Compound Components Pattern

Compound component is yet another pattern in React. The objective of the compound component pattern is to have a clearer, more expressive and flexible api.

> Think of compound components like the `<select>` and `<option>` elements in HTML.
> Apart they don't do too much, but together they allow you to create the complete experience.
> The way they do this is by sharing implicit state between the components.
> Compound components allow you to create and use components which share this state implicitly.
> — Kent C. Dodds

The idea behind the compound component is to have two or more components that work together to accomplish a specific behavior.
The objective is to provide a more expressive and flexible API.

Let's understand it with example.

## Example

We could think of `Tabs` as a compound component with the signature like:

```tsx
// App.tsx

import React from "react";
import Tabs from "../components/Tabs";

const App = () => {
  return (
    <>
      <div>MyApp</div>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.Panel>
            <p>Tab one content!</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Tab two content!</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Tab three content!</p>
          </Tabs.Panel>
        </Tabs.TabPanels>
      </Tabs>
    </>
  );
};
export default App;
```

Our `Tabs` have 2 child components, which are `TabList` and `TabPanels` and with one child each.

The state/data between these components is shared using React context.
For `Tabs` we have `useTabsContext` to share active tab index and on click handler.

```tsx
// Tabs.tsx

import React from "react";

type TabsPropType = {
  children: React.ReactNode;
};

type TabsContextType = {
  activeTab: number;
  onChange: (key: number) => void;
};

const TabsContext = React.createContext<TabsContextType | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the TabsContext.Provider`
    );
  }
  return context;
}

const Tabs = ({ children }: TabsPropType) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const onChange = React.useCallback((tabKey) => setActiveTab(tabKey), []);

  const value = React.useMemo(
    () => ({ activeTab, onChange }),
    [activeTab, onChange]
  );

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

type PropType = {
  children: React.ReactNode;
  onClick?: () => void;
};
const TabList = ({ children }: PropType) => {
  const { onChange } = useTabsContext();
  const tabList = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return React.cloneElement(child, {
      onClick: () => onChange(index),
    });
  });
  return <div className="tab-list">{tabList}</div>;
};

const Tab = ({ children, onClick }: PropType) => {
  return (
    <div className="tab" onClick={onClick}>
      {children}
    </div>
  );
};

const TabPanels = ({ children }: PropType) => {
  const { activeTab } = useTabsContext();
  const tabPanels = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return activeTab === index ? child : null;
  });
  return <div className="tab-panels">{tabPanels}</div>;
};

const Panel = ({ children }: PropType) => {
  return <div className="tab-panel">{children}</div>;
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;

Tabs.TabPanels = TabPanels;
Tabs.Panel = Panel;

export default Tabs;
```

I hope that helps you get some ideas of ways you can make your component APIs more expressive and useful. Good luck!

Thanks!
