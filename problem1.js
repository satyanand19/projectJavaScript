
function run(inventory) {
    let Details=null;
    for (let counter = 0;counter <= inventory.length; counter++) {
       if(inventory[counter]['id'] === 33) {
           Details = inventory[counter];
           break;
       }
    }
    console.log('Car 33 is a '+ Details['car_year']+' '+Details['car_make']+' '+Details['car_model']);
}
   
module.exports =run ;
