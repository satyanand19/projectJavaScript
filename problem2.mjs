function Car_detail(inventory) {
    let Details=inventory[inventory.length-1];
    console.log("Last car is a "+ Details['car_make']+" "+Details['car_model']);

}
export { Car_detail };