
function carYear(inventory) {
    let carYearDetails = [];
    for (let i = 0; i < inventory.length; i++) {
        let arrayofIdandYear = [inventory[i]['car_year'], inventory[i]['id']];
        carYearDetails.push(arrayofIdandYear);
    }
    return carYearDetails;

}
module.exports = carYear;