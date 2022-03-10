function BMWAndAudi(inventory) {
    let array=[];
    for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i]['car_make'] === 'BMW') {
          array.push(inventory[i]);
        }
        if(inventory[i]['car_make'] === 'Audi') {
            array.push(inventory[i]);
          }
    }
    
    console.log(JSON.stringify(array));
}
module.exports = BMWAndAudi;
