
# poss

  **"This poss might work..."**

  Slightly better-looking error handling for generators

## Instead of this:

```js
try {
  var resource = yield fetch(token)
} catch (err) {
  // do something with the error
}
// do something with the resource
```

You can do this:

```js
let [err, resource] = yield poss(fetch(token))
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
