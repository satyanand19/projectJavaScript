
let carYear = require('./problem4.js');
function olderCar(inventory) {

    let carYearDetails = carYear(inventory);
    let carDetails = [];
    let countCarYearOlderthan2000 = null;
    for (let i = 0; i < carYearDetails.length; i++) {
        if (carYearDetails[i][0] < 2000) {
            countCarYearOlderthan2000++;
            for (let j = 0; j < inventory.length; j++) {
                if (carYearDetails[i][1] === inventory[j]['id']) {
                    carDetails.push(inventory[j]);
                }
            }
        }
    }
    
    for (let i = 0; i < carDetails.length; i++) {
        console.log(carDetails[i]);
    }
    console.log('count of all the cars Older than 2000 year : ' + countCarYearOlderthan2000);
}
module.exports = olderCar;