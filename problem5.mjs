


function olderCar(inventory) {
    let carYearDetails=[];
    for(let i=0;i<inventory.length;i++)
    {
        carYearDetails.push(inventory[i]['car_year']);
    }
    let countCar=0;
    for(let i=0;i<carYearDetails.length;i++) {
        if(carYearDetails[i]>2000) {
            countCar++;
        }
    }
    console.log('count of all the cars Older than 2000 year : '+countCar);
}
export { olderCar };