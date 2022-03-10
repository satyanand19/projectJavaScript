function sortAlphabetically(inventory) {
    
    for(let i=0;i<inventory.length;i++) {
      for(let j=i+1;j<inventory.length;j++)
      {
         if(inventory[i]['car_model']>inventory[j]['car_model']) {
             let temp = inventory[i];
             inventory[i]=inventory[j];
             inventory[j]=temp;
         }
      } 
    }
    for(let i=0;i<inventory.length;i++) {
        console.log(inventory[i]);
    }
    
}
module.exports = sortAlphabetically ;