/**
 * Module Dependencies
 */

let assert = require('assert')
let poss = require('./')

/**
 * Tests
 */

describe('poss', function() {
  it('should catch errors', function * () {
    let [val, err] = yield poss(function * () {
      throw new Error('wtf!')
    })

    assert.equal(val, null)
    assert.equal(err.message, 'wtf!')
  })

  it('should return values', function * () {
    let [val, err] = yield poss(function * () {
      return 'hi'
    })

    assert.equal(val, 'hi')
    assert.equal(err, null)
  })
})