---
title: JavaScript array methods splice and slice
date: 2019/06/03
tag: javascript
description: Details on js array methods splice and slice
---

# JavaScript array methods splice and slice

## splice

- Changes content/items of array in place(mutate)
- Used to remove, replace existing elements
- Used to add new elements
- An array containing the deleted elements are returned

To access part of an array without modifying it, see slice().

**Syntax**

```js
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN);
```

**Examples**

```js
const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// Now months become ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

For more details see [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) on mdn.

## slice

- Returns a shallow copy of a portion of an array into a new array
- Selected from start index to end index (end not included)
- The original array will not be modified.

**Syntax**

```js
slice();
slice(start);
slice(start, end);
```

**Examples**

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

#### Parsing Array-like objects

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
```

For more details see [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) on mdn.

Thanks.
