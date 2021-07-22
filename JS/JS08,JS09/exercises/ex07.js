var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
//I like to learn javascript with someone?

let str = 'I like to learn javascript with someone?';
let strSlicer = (str1) =>{
    let randomString = str1.split("");
    return randomString.filter(elem=>!separators.includes(elem)).length
}
console.log(strSlicer(str));
