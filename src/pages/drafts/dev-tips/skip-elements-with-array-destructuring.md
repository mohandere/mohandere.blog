---
title: Tip - Skip elements with Array Destructuring
date: 2021/06/28
tag: javascript
description: You can use an empty placeholder comma to skip elements when destructuring arrays.
---

# Tip - Skip elements with Array Destructuring

import Image from "next/image";

<Image
  src="/images/Skipping-Values-from-Array.svg"
  alt="Skip elements with Array Destructuring"
  width={1000}
  height={320}
  layout="responsive"
  quality={100}
  className="next-image"
/>

## Example

You can use an empty 'placeholder' comma to skip elements when
destructuring arrays like below.

```js
const url = "https://github.com/mohandere";
const [protocol, , domain, username] = url.split("/"); // [https:", "", "github.com", "mohandere"]
console.log(username); // "mohandere"
```

Thanks!
