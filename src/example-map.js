var fiends = [
    { name: 'Rubicante', series: '4', meaning: 'Red-faced Terror'},
    { name: 'Scarmiglione', series: '4', meaning: 'Trouble Maker'},
    { name: 'Barbariccia', series: '4', meaning: 'Curly Beard'},
    { name: 'Cagnazzo', series: '4', meaning: 'Nasty Dog'}
];

// using standard function syntax
var names = fiends.map(function(fiend) {
    return fiend.name 
});

// returning more than name
var namesWithMeaning = fiends.map(fiend => {
    return fiend.name + " means " + fiend.meaning;
})

// using => arrow
var names2 = fiends.map(f => f.name);

console.log(names);
console.log(namesWithMeaning);
console.log(names2);