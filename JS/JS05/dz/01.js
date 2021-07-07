function americanFloors(floor){
    let floorCounter = 0;
    if(floor < 0){
        return floor
    }
    for (let i = 1;i<floor;i++){
        if(floor === 1){
            floorCounter--;
        }
        else if(floor>13){
            floorCounter=i-1;
        }
        else {
            floorCounter = i;
        }
    } 
    return floorCounter
  
}
console.log(americanFloors(1));
console.log(americanFloors(0));
console.log(americanFloors(5));
console.log(americanFloors(15));
console.log(americanFloors(-3));