let getYears=(catYears,dogYears)=>{
    let counter=0;
    let counter2=0;
   do{
        if(counter===0){
            catYears-=15;
            counter++;
        }else if(counter===1){
            catYears-=9;
            counter++;
        }else{
            catYears-=4;
            counter++;
        }
    }while(catYears!==0)
   do{
        if(counter2===0){
            dogYears-=15;
            counter2++;
        }else if(counter2===1){
            dogYears-=9;
            counter2++;
        }else{
            dogYears-=5;
            counter2++;
        }
    }while(dogYears!==0)
    return counter+" "+counter2;
}
console.log(getYears(40, 34));
console.log(getYears(44, 54));