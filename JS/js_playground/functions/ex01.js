function reverse(number){
    let transformed = '';
    for(let i = number.length-1; i>=0;i--){
        transformed+=number[i];
    }
    return transformed;
}
console.log(reverse('32234'));
//drugi način
function reverseNumber(n){
    n+='';
    return n.split('').reverse().join('');
}
console.log(reverseNumber(2345));
