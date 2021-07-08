let isString = str => {
    if (typeof str === 'string' && str.length !== 0){
        return 'String je'
    }
    else if (str.length === 0){
        return 'String is blank'
    }
    else{
        return 'Nije string'
    }
}
console.log(isString('jesam li ja string'));
console.log(isString(23));
console.log(isString(''));
