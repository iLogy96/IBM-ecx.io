//vrati veći broj
let displayLarger = (a,b) => {
    if (parseInt(a)>parseInt(b)){
        return a
    }
    else {
        return b
    }
}
console.log(displayLarger(2,3))
//sign of the product of three numbers
let productSign = (x,y,z) => {
    if ((x+y+z)<0){
        return '-'
    }
    else {
        return '+'
    }
}
console.log(productSign(3,7,2))
//sorting three numbers
