'strict mode'
let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;
let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;

// Test2
// dolphinScore1 = 85;
// dolphinScore2 = 54;
// dolphinScore3 = 41;
// koalaScore1 = 23;
// koalaScore2 = 34;
// koalaScore3 = 27;

// Challenge
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(average1, average2) {
    if (average1 > average2 * 2) {
        console.log(`Dolphins win (${average1} vs ${average2}).`);
    } else if (average1 * 2 < average2) {
        console.log(`Koalas win (${average2} vs ${average1}).`);
    } else {
        console.log(`Nobody wins.`);
    }
}

const averageDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const averageKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);
checkWinner(averageDolphins, averageKoalas);
*/
// End of Challrnge

/*
const years = new Array(1969, 1974, 2008, 2022);
console.log(years);
console.log(years[0]);
console.log(years.length);
function fromNow(year) {
    return 2022 - year;
}

const yearsFromNow = [fromNow(years[0]), fromNow(years[1]), fromNow(years[years.length - 1]),];
console.log(yearsFromNow);
*/

// ========== CHALLENGE #2 ==========

// function tipCalc(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// tipCalc = bill => 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

// tipCalc = function (bill) { return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2 };

// const bills = [125, 555, 44]

// console.log(bills);
// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// ========== End of chalenge #2 ==========

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function () {
//         return this.age = 2022 - this.birthYear;
//     },

//     // calcAge: function () { return false ? 1 : 0 }

//     // age: function () { return this.calcAge() }

//     getSummary: function () { return `${this.firstName} is a ${this.age}-years ${jonas.job}, who has ${this.hasDriverLicense ? 'a' : 'no'} driving license.` }
// }

// jonas.calcAge();
// console.log(jonas.getSummary());

// ========== CHALENGE #3 ==========
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    },
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
    },
}

mark.calcBMI();
john.calcBMI();
console.log(`${john.fullName}'s BMI ${john.bmi.toFixed(2)} is ${john.bmi > mark.bmi ? 'higher' : 'lower'} than Mark's BMI ${mark.bmi.toFixed(2)}.`);
*/

// ========== CHALENGE #4 ==========

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

calcTip = function (bill) { return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2 };
calcAverage = function (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) { sum += array[i] };
    return sum / array.length
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(`Чеки: ${bills}`);
console.log(`Чаевые: ${tips}`);
console.log(`Общие суммы: ${totals}`);
console.log(`Средняя сумма ${calcAverage(totals)}`);