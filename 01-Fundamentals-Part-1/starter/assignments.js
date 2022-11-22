/*
const country = 'Россия';
const continent = 'Европа, Азия';
let population = 140000000;

let isIsLand = true;
let language = "Русский";

console.log('const "country": ', country);
console.log('const "continent": ', continent);
console.log('👌var "population": ', population);
console.log('typeof of var "isIsLand": ', typeof isIsLand);
console.log('typeof of var "population": ', typeof population);
console.log('typeof of const "country": ', typeof country);
console.log('typeof of var "language": ', typeof language);
console.log('var "language": ', language);
console.log('var "isIsLand": ', isIsLand);
country = "США";
*/

// --- 2 ---

/*
let weightMakr = 95;
let heightMark = 1.88;
let weightJohn = 85;
let heightJohn = 1.76;

let markBMI = weightMakr / (heightMark ** 2);
let johnBMI = weightJohn / heightJohn / heightJohn;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markBMI = markBMI.toFixed(2);
johnBMI = johnBMI.toFixed(2);

if (markHigherBMI) {
    console.log(`BMI Марка (${markBMI}) больше, чем BMI Джона (${johnBMI}).`);
} else {
    console.log(`BMI Марка (${markBMI}) меньше, чем BMI Джона (${johnBMI}).`);
}
*/

// ---3---

/*
// const resultDolphins1 = 96;
// const resultDolphins2 = 108;
// const resultDolphins3 = 89;
// const resultKoalas1 = 88;
// const resultKoalas2 = 91;
// const resultKoalas3 = 110;

const resultDolphins1 = 97;
const resultDolphins2 = 112;
const resultDolphins3 = 101;
const resultKoalas1 = 109;
const resultKoalas2 = 95;
const resultKoalas3 = 123;

const averageDolphin = (resultDolphins1 + resultDolphins2 + resultDolphins3) / 3;
const averageKoalas = (resultKoalas1 + resultKoalas2 + resultKoalas3) / 3;
console.log(`Средний результат. Дельфины: ${averageDolphin}, Коалы: ${averageKoalas}.`)
if (averageDolphin < 100 && averageKoalas < 100) {
    console.log(`Ни одна из команд не квалифицировалась`);
} else if (averageDolphin > averageKoalas) {
    console.log(`Победили Дельфины!`);
} else if (averageDolphin < averageKoalas) {
    console.log(`Победили Коалы`);
} else {
    console.log(`Обе команды показали одинаковый результат. Переигровка`);
}
*/

// ---4---

const bill = 430;
const tip = (bill >= 50 && bill < 300) ? 0.15 : 0.2;
console.log(`Чек: ${bill}. Чаевые: ${tip * 100}%, что составит ${bill * tip}. Всего к оплате: ${bill * (1 + tip)}`);


