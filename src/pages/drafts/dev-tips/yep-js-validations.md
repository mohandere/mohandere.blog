---
title: Yup js interdependent fields validation
date: 2021/02/01
tag: javascript
description: Yup is a JavaScript schema builder for value parsing and validation. Let's see how we can do interdependent fields validations.
---

# Yup js interdependent fields validation.

[Yup](https://github.com/jquense/yup) is a JavaScript library which allow modeling complex, interdependent validations, or value transformations.

Let's see how we can do interdependent fields validations. In below example lets take use case where `consent` is dependent on `email` field. If `email` is present and if its valid, then only `consent` is mandatory.

```jsx
import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup.string().email(),
});

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  consent: yup.boolean().when('email', {
    is: (value) => {
      return emailSchema.isValidSync({
        email: value,
      });
    },
    then: yup
      .boolean()
      .oneOf([true], 'This is required.'),
    })
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

// check validity
schema
  .isValid({
    name: 'jimmy',
    email: 'xyz@test.com'
  })
  .then(function (valid) {
    valid; // => false, because `consent` is required in case of valid email
  });

// check validity
schema
  .isValid({
    name: 'jimmy',
  })
  .then(function (valid) {
    valid; // => true, because email is not required
  });
```

Thanks!
