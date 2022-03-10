
function carYear(inventory) {
    let carYearDetails = [];
    for (let i = 0; i < inventory.length; i++) {
        carYearDetails.push(inventory[i]['car_year']);
    }
    return carYearDetails;
    // for(let i=0;i<carYearDetails.length;i++) {
    //     console.log(carYearDetails[i]);
    // }
    // module.exports = carYearDetails;

}
module.exports = carYear;