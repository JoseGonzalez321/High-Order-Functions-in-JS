'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = _fs2.default.readFileSync('../data/data.txt', 'UTF-8').trim().split('\r\n').map(function (line) {
               return line.split(',');
}).reduce(function (characters, _ref) {
               var _ref2 = _slicedToArray(_ref, 3),
                   name = _ref2[0],
                   job = _ref2[1],
                   weapon = _ref2[2];

               characters[name] = characters[name] || [];
               characters[name].push({ weapon: weapon, job: job });

               return characters;
}, {});

console.log('output', JSON.stringify(output, null, 2));