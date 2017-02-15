'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dragons = [{ name: 'red', element: 'fire' }, { name: 'blue', element: 'water' }, { name: 'yellow', element: 'lightning' }, { name: 'tony', element: 'earth' }, { name: 'luz', element: 'holy' }, { name: 'tiamat', element: 'darkness' }, { name: 'jeff', element: 'holy' }];

var hasElement = _lodash2.default.curry(function (element, obj) {
    return obj.element === element;
});

var holyDragons = dragons.filter(hasElement('holy'));

console.log(holyDragons);