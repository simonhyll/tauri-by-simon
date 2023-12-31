---
title: Async and Promises
sidebar:
  badge:
    text: WIP
    variant: tip
---

# Async and Promises

## What is a Promise?

A `Promise` is the primary way that your javascript code becomes asynchronous.

Promises, much like Futures in Rust, are basically a promise to the calling function that sooner or later that promise will be resolved and contain some value. Kind of like creating a join handle for a child thread.

Promises were the first to come around in javascript for async programming and they're still what's used, just that in more modern code we seldom interact as directly with them thanks to the advent of `async/await`.

A `Promise` can be created like so:

```ts
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello')
  }, 3000)
}).then(value => {
  console.log(value)
})
```

## What is `async/await`?

Many years after we were given promises, we finally received a sane way of using them called `async/await`. If you know how async works in Rust, this will be very familiar to you.

In more traditional promise based programming you might find code like this:

```ts
function hello(): Promise<string> {
  return new Promise(resolve => {
    resolve('Hello')
  })
}

hello()
  .then(message => {
    console.log(message)
  })
  .catch(console.error)
```

That's all fine and dandy, but we can create code that looks much better by using `async/await`:

```ts
async function hello(): Promise<string> {
  return 'Hello'
}
const message = await hello()
```

## What does `await` do?

The `await` keyword allows you to resolve a `Promise`. Its functionality is identical to that of using `.then` but it lets you develop in a nicer fashion.

## That just looks like synchronous code with extra steps

That's because so far that's kind of what it has been. As you might have guessed, the true power of asynchronous programming comes from the ability to run multiple functions at the same time.

In comes `Promise.all`!

```ts
async function hello(name: string) {
  return `Hello ${name}`
}
const promises = []
promises.push(hello())
promises.push(hello())
promises.push(hello())
await Promise.all(promises)
```

## `try/catch` vs `.then/.catch`

Look at the following two examples and compare for yourself and see which you prefer.

```ts
try {
  const message1 = await hello()
  console.log(message1)
  const message2 = await hello()
  console.log(message2)
  const message3 = await hello()
  console.log(message3)
} catch (e) {
  console.error(e)
}
```

```ts
hello()
  .then(message1 => {
    console.log(message1)
  })
  .then(message2 => {
    console.log(message2)
  })
  .then(message3 => {
    console.log(message3)
  })
  .catch(e => {
    console.error(e)
  })
```

## Today we learned...

- **Promise.all**: A function that takes an iterable as an argument in order to resolve all `Promise`s held within
- **async**: A function that is marked as being `async` returns a `Promise`
- **await**: Blocks execution until the `Promise` it awaits is resolved
- **.then/.catch**: An older style of resolving promises and handling their errors
- **try/catch**: A way of doing error handling that pairs very well with `async/await` style programming

## Questions
