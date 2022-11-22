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