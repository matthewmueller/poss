/**
 * Module Dependencies
 */

let assert = require('assert')
let poss = require('../')

/**
 * Tests
 */

describe('poss', function() {
  it('should catch errors', function * () {
    let [err, val] = yield poss(function * () {
      throw new Error('wtf!')
    })

    assert.equal(val, null)
    assert.equal(err.message, 'wtf!')
  })

  it('should return values', function * () {
    let [err, val] = yield poss(function * () {
      return 'hi'
    })

    assert.equal(val, 'hi')
    assert.equal(err, null)
  })

  it('should work for promise resolves', async () => {
    let p = new Promise(function (resolve) {
      return resolve('hi')
    })

    let [err, val] = await poss(p)
    assert.equal(err, null)
    assert.equal(val, 'hi')
  })

  it('should work for promise rejections', async () => {
    let p = new Promise(function (resolve, reject) {
      return reject(new Error('wtf!'))
    })

    let [err, val] = await poss(p)
    assert.equal(val, null)
    assert.equal(err.message, 'wtf!')
  })
})
