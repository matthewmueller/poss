
# poss

  **"This poss might work..."**

  Slightly better-looking error handling for generators and async/await.

## Instead of this:

```js
try {
  var resource = await fetch(token)
} catch (err) {
  // do something with the error
}
// do something with the resource
```

You can do this:

```js
const [err, resource] = await poss(fetch(token))
if (err !== null) {
  // do something with the error
}

// do something with the resource
```

## Installation

```
npm install poss
```

## License

MIT
