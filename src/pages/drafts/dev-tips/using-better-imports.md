---
title: Tip - Better imports using Barrels in JS/TS
date: 2021/05/12
tag: javascript
description: Using Barrels to make import statement more manageable
---

# Tip - Better imports using Barrels in JS/TS

import Image from "next/image";

<Image
  src="/images/Imports.jsx.svg"
  alt="Better Imports"
  width={700}
  height={480}
  layout="responsive"
  quality={100}
  className="next-image"
/>

### Example

Let's say you have 3 components in your `/components` directory

```jsx
// components/Header.jsx
export const Header = () => {};
```

```jsx
// components/Footer.jsx
export const Footer = () => {};
```

```jsx
// components/NavBar.jsx
export const NavBar = () => {};
```

Create `components/index.jsx` which export all components

```jsx
// components/index.jsx
export * from "./Header";
export * from "./Footer";
export * from "./NavBar";
```

Then import them like

```jsx
// App.jsx

// Instead of this -
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

// Use this
import { Header, Footer, NavBar } from "../components";
```

Thanks.
