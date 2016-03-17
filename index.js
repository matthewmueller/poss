/**
 * Module Dependencies
 */

module.exports = poss

/**
 * Poss
 *
 * @param {Mixed}
 * @return {Mixed}
 */

function * poss (gen) {
  var o
  try { o = yield gen }
  catch (e) return e
  return o
}

