---
title: Tip - TypeScript keyof operator
date: 2021/03/22
tag: typescript
description: Use TypeScript keyof operator to produce new type from Object
---

# Tip - TypeScript keyof operator

import Image from "next/image";

<Image
  src="/images/ts-keyof.jsx.svg"
  alt="TypeScript keyof"
  width={1000}
  height={580}
  layout="responsive"
  quality={100}
  className="next-image"
/>

## Example

Lets say we have `Product` type with below keys

```tsx
interface IProduct {
  id: string;
  title: string;
  base_price: number;
  selling_price: number;
  dateAdded: Date;
}

type ProductKey = keyof Product;
// "id" | "title" | "base_price" | "selling_price" | "dateAdded"
```

Then while using it

```tsx
const iPhone: IProduct = {
  id: "AberWdsdXps",
  title: "iPhone 12 (Red)",
  base_price: 12000,
  selling_price: 10000,
  dateAdded: new Date(),
};

const getValue = (key: ProductKey) => iPhone[key];
```

Thanks.
