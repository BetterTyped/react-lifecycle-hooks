# React Lifecycle Hooks

[![NPM](https://img.shields.io/npm/v/@better-hooks/lifecycle.svg)](https://www.npmjs.com/package/@better-hooks/lifecycle)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-hooks/lifecycle)
![npm type definitions](https://img.shields.io/npm/types/@better-hooks/lifecycle)
![NPM](https://img.shields.io/npm/l/@better-hooks/lifecycle)
![npm](https://img.shields.io/npm/dm/@better-hooks/lifecycle)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-lifecycle-hooks?style=social)

> React lifecycle turned into dev friendly and readable hooks

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: No external dependencies

## Install

```bash
npm install --save @better-hooks/lifecycle
```

or

```bash
yarn add @better-hooks/lifecycle
```

## Usage

```tsx
import React from "react";
import { useDidMount, useDidRender, useDidUpdate, useWillUnmount,useIsMounted, useWillMount } from "@better-hooks/lifecycle";

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
