let dString = '04.01.1954';
let d1 = new Date(dString);
let d2 = new Date();

function inmilliSeconds(d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt(t2-t1);
}
function inSeconds(d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2-t1)/1000);
}
function inDays(d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2-t1)/(24* 3600 * 1000));
}
function inWeeks(d1,d2){
    let t1=d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
}
function inMonths (d1,d2){
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
}
function inYears(d1,d2){
    return d2.getFullYear() - d1.getFullYear();
}
console.log("Number of years since " + dString + ": " + inYears(d1, d2));
console.log("Number of months since " + dString + ": " + inMonths(d1, d2));
console.log("Number of weeks since " + dString + ": " + inWeeks(d1, d2));
console.log("Number of days since " + dString + ": " + inDays(d1, d2));
console.log("Number of seconds since " + dString + ": " + inSeconds(d1, d2));
console.log("Number of milliseconds since " + dString + ": " + inmilliSeconds(d1, d2));



