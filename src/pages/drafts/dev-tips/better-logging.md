---
title: Tip - Better logging on console
date: 2021/05/03
tag: web
description: Prints pretty output on terminal/console
---

# Tip - Better logging on console

Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method with third param(space).

```js
// JSON.stringify(value, replacer, space)
JSON.stringify(user, null, 3);
```

Example

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  address: {
    firstLine: "AVC Road",
    secondLine: "Baner Road",
    state: "Maharastra",
  },
};
console.log("User:\n", JSON.stringify(user, null, 2));
```

This will look like -

import Image from "next/image";

<Image
  src="/images/preety-print.jpeg"
  alt="Preety console output"
  width={369}
  height={268}
  quality={100}
  className="next-image"
/>

Thanks.
