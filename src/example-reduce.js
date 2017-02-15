var hps = [
    { amount: 600 },
    { amount: 400 },
    { amount: 700 },
    { amount: 250 },
    { amount: 900 }
];

var totalHp = hps.reduce(function(sum, hp) {
    return sum + hp.amount;
}, 0);

// using => syntax
var totalHp2 = hps.reduce((sum, hp) => sum + hp.amount, 0);

console.log("Your total HP: " + totalHp);
console.log("Your total HP2: " + totalHp);