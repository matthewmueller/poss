'use strict'

/**
 * Module Dependencies
 */

const co = require('co')

/**
 * Export `poss`
 */

module.exports = co.wrap(poss)

/**
 * Poss
 *
 * @param {Mixed}
 * @return {Mixed}
 */

function * poss (gen) {
  var o
  try { o = yield gen }
  catch (e) { return [e, null] }
  return [null, o]
}

