//funkcija koja obrče broj i string te provjerava iste

function reverse(m){
    if (typeof m === 'number'){
        m=m.toString();
        return  m.split('').reverse().join('') 
    }
    else {
        m = m.split('').reverse().join('');
        return m;
    }
}
console.log(reverse(12345));