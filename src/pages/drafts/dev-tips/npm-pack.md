---
title: Tip - NPM Packaging
date: 2021/05/12
tag: web
description: NPM Packaging another library/repo to test in Host application
---

# Tip - NPM Packaging

Let's say we are developing a new library/module/service seperatly which has seperate repository. For example `react-slider`

Once you done with with development of `react-slider` you want to test it locally inside your application(host). For example `my-ecomm-app`

Assume your repos are under /Documents at same level

```
/Documents
  / react-slider
  / my-ecomm-app
```

To test our `react-slider` locally inside `my-ecomm-app` we have 2 options -

1. npm pack
2. npm link

## 1. npm pack

In your `react-slider` repo, in your package json add scripts for packaging. For example

```js
// package.json

"scripts": {
  "build": "react-scripts build",
  "prepackpackage": "npm run build",
  "packpackage": "cd dist && npm pack"
},
```

then you can run

```
$ npm run packpackage
```

Once you run above command, the `prepackpackage` hook/script will generate build(/dist) first,
then will create .tgz file from that build at path `/react-silder/dist/react-silder-0.0.61.tgz`

Once packpackage success, we are good to go ahead and install `react-silder-0.0.61.tgz` as dependancy in `my-ecomm-app` so that we can test it.

Now have to install that `.tgz` file in our host application,
So copy absolute path of that .tgz file, the run below command.

```
$ cd my-ecomm-app
$ npm install /Users/username/Documents/react-silder/dist/react-silder-0.0.61.tgz

```

After this your package.json from `my-ecomm-app` look like

```js
// my-ecomm-app - package.json
"dependancies": {
  ...
  "react-slider": "file:../react-silder/dist/react-silder-0.0.61.tgz",
}
```

Yeah! that all what we have to do. Now you can restart/run host application again so see changes.

## 2. npm link

go to `react-silder` and run below command

```
$ npm link
```

then in `my-ecomm-app`

```
$ npm link react-silder
```

For more details see [Understanding npm-link](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557)

Thats all!

Thanks.
