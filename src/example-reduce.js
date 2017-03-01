var hps = [
    { amount: 600 },
    { amount: 400 },
    { amount: 700 },
    { amount: 250 },
    { amount: 900 }
];

let startingHp = 0;

var totalHp = hps.reduce(function(sum, hp) {
    return sum + hp.amount;
}, startingHp);

// using => syntax
var totalHp2 = hps.reduce((sum, hp) => sum + hp.amount, startingHp);

console.log("Your total HP: " + totalHp);
console.log("Your total HP2: " + totalHp2);
