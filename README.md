# `@rehooks/useListeners`

> React hook to add an arbitrary number of event listeners/handlers to an element

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/useListeners
```

## Usage

```js
import { useRef } from 'react'
import useListeners from '@rehooks/useListeners'

function MyComponent() {
  let node = useRef(null)

  useListeners(node, [['click', handleClick], ['mousedown', handleMousedown]])

  return <div ref={node} />
}

function handleClick() {}
function handleMousedown() {}
```
