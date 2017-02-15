import _ from 'lodash';

let dragons = [
    { name: 'red', element: 'fire'},
    { name: 'blue', element: 'water'},
    { name: 'yellow', element: 'lightning'},
    { name: 'tony', element: 'earth'},    
    { name: 'luz', element: 'holy'},
    { name: 'tiamat', element: 'darkness'},
    { name: 'jeff', element: 'holy'}
];

let hasElement = 
_.curry((element, obj) => obj.element === element)

let holyDragons =
    dragons.filter(hasElement('holy'))

console.log(holyDragons);