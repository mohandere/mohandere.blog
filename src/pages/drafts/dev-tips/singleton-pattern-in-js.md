---
title: Singleton in JavaScript
date: 2021/02/03
tag: javascript
description: Let's see how we can implement Singleton in JavaScript using new Proxy APIs
---

# Singleton in JavaScript

We can use [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) API which enables to create proxy for
another object so we can intercept fundamental operations like [[Get]], [[Set]] etc.

```
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  this.getName = function() {
    return `${this.name.first} ${this.name.last}`;
  }
}


const singletonify = (Class) => {
  const handler = {
    instance: null,
    construct: function(Class, args) {
      if(this.instance) {
        return this.instance;
      }
      this.instance = new Class(...args)
      return this.instance;
    }
  }
  return new Proxy(Class, handler);
}

const SingletonPerson = singletonify(Person);

const p1 = new SingletonPerson('John', 'A', 23, 'M', 'travel')
const p2 = new SingletonPerson('Hannes', 'P', 32, 'M', 'Eat')

console.log(p1)
console.log(p2)
// Output
`
Person {
  name: { first: 'John', last: 'A' },
  age: 23,
  gender: 'M',
  interests: 'travel',
  getName: ƒ (),
  __proto__: { constructor: ƒ Person() }
}
Person {
  name: { first: 'John', last: 'A' },
  age: 23,
  gender: 'M',
  interests: 'travel',
  getName: ƒ (),
  __proto__: { constructor: ƒ Person() }
}
`

```

Hope you find this useful. Thanks!
