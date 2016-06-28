'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortedPairs;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortedPairs(object, sorter) {
  sorter = sorter || _lodash2.default.property('0');
  return (0, _lodash2.default)(object).toPairs().sortBy(sorter).value();
}

