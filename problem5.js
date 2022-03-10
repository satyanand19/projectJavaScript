


function olderCar(inventory) {
    let carYearDetails=[];
    for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i]['car_year']<2000) {
            carYearDetails.push(inventory[i]);
        }
        
    }
    for (let i=0;i<carYearDetails.length;i++) {
        console.log(carYearDetails[i]);
    }
    // let countCar=0;
    // for(let i=0;i<carYearDetails.length;i++) {
    //     if(carYearDetails[i]<2000) {
    //         countCar++;
    //     }
    // }
    console.log('count of all the cars Older than 2000 year : '+carYearDetails.length);
}
module.exports = olderCar ;