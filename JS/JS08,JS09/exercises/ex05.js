let array1 = [10,22,32,61,2312313,205];
let array2 = [32,30,1,61,205,102];
let array3 = array1.concat(array2);
function conCat () {
    let array4 = new Set(array3);
    console.log(array4);
}
conCat();

array3 = array3.filter((item,index) =>{
    return (array3.indexOf(item)!= index)
});
console.log(array3);