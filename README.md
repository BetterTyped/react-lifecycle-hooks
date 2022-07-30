# @better-typed/react-lifecycle-hooks

[![NPM](https://img.shields.io/npm/v/@better-typed/react-lifecycle-hooks.svg)](https://www.npmjs.com/package/@better-typed/react-lifecycle-hooks)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-typed/react-lifecycle-hooks)
![npm type definitions](https://img.shields.io/npm/types/@better-typed/react-lifecycle-hooks)
![NPM](https://img.shields.io/npm/l/@better-typed/react-lifecycle-hooks)
![npm](https://img.shields.io/npm/dm/@better-typed/react-lifecycle-hooks)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-lifecycle-hooks?style=social)

> React lifecycle turned into dev friendly hooks

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: No external dependencies

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
import { useDidMount, useDidRender, useDidUpdate, useWillUnmount,useIsMounted, useWillMount } from "@better-typed/react-lifecycle-hooks";

const MyComponent: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  // returns ref with the mounted boolean state
  const mounted = useIsMounted()

  // Method for the component rerendering
  const forceUpdate = useForceUpdate()

  // Called before mount
  useWillMount(() => {
    // ...
  })

  // Called on component mount
  useDidMount(() => {
    // ...
  })

  // Called second, when initial DOM changes are triggered
  useDidRender(() => {
    // ...
  })

  // Called when isOpen change
  useDidUpdate(() => {
    // ...
  }, [isOpen])

  // Called when isOpen change but also on mount
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
