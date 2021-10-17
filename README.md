# @better-typed/react-lifecycle-hooks

[![NPM](https://img.shields.io/npm/v/@better-typed/react-lifecycle-hooks.svg)](https://www.npmjs.com/package/@better-typed/react-lifecycle-hooks)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-typed/react-lifecycle-hooks)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/@better-typed/react-lifecycle-hooks)
![npm](https://img.shields.io/npm/dm/@better-typed/react-lifecycle-hooks)
![GitHub stars](https://img.shields.io/github/stars/@better-typed/react-lifecycle-hooks?style=social)

> React lifecycle turned into dev friendly hooks

- [Docs](http://bettertyped.github.io/react-lifecycle-hooks/)
- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: No external dependencies
- :gem: something
- :gift: something
- :wrench: something
- :crown: something

## Install

```bash
npm install --save @better-typed/react-lifecycle-hooks
```

or

```bash
yarn add @better-typed/react-lifecycle-hooks
```

## Usage

```tsx
import React from "react";
import { useDidMount, useDidRender, useDidUpdate, useWillUnmount } from "@better-typed/react-lifecycle-hooks";

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  // Called first
  useDidMount(() => {
    // ...
  })

  // Called second, once when initial DOM changes are triggered
  useDidRender(() => {
    // ...
  })

  // Called when isOpen change
  useDidUpdate(() => {
    // ...
  }, [isOpen])

  // Called when isOpen change, also on mount
  useDidUpdate(() => {
    // ...
  }, [isOpen], true)

  // Called last
  useWillUnmount(() => {
    // ...
  })


  return (
    // ...
  )
}

```
