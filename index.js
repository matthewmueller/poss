'use strict';

/**
 * Module Dependencies
 */

var regeneratorRuntime = require('babel-runtime/regenerator')
var _marked = [poss].map(regeneratorRuntime.mark);
var co = require('co');

/**
 * Export `poss`
 */

module.exports = co.wrap(poss);

/**
 * Poss
 *
 * @param {Mixed}
 * @return {Mixed}
 */

function poss(gen) {
  var o;
  return regeneratorRuntime.wrap(function poss$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return gen;

        case 3:
          o = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](0);
          return _context.abrupt('return', [_context.t0, null]);

        case 9:
          return _context.abrupt('return', [null, o]);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 6]]);
}
