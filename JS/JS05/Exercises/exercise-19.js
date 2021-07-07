console.log('Exercise template 19');

/*
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/
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
