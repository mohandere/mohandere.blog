---
title: Tip - Inline field assignment form Constructor in TypeScript
date: 2021/06/17
tag: typescript
description: In TypeScript we can assign class fields inline in constructor
---

# Tip - Inline field assignment form Constructor in TypeScript

import Image from "next/image";

<Image
  src="/images/Inline-field-assignment.svg"
  alt="Inline field assignment form Constructor in TypeScript"
  width={700}
  height={620}
  layout="responsive"
  quality={100}
  className="next-image"
/>

### Example

Instead of this way

```tsx
class Person {
  private id: string;
  private name: string;
  constructor(id: string, name: string) {
    this.id = id || 0;
    this.name = name;
  }
}
```

Use this way, this is much clean and un-necessary typing efforts.

```tsx
class Person {
  constructor(private id: string = 0, private name string) {}
}
```

Thanks!
