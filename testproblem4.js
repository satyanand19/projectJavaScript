
let inventory = require('./carDetails');
let carYear = require('./problem4')
let carYearDetails = carYear(inventory);
for (let i = 0; i < carYearDetails.length; i++) {
    console.log(carYearDetails[i][0]);
}