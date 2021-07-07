let dString = '06.29.2021';
let d1 = new Date(dString);
let d2 = new Date();

let dateDiff =  {
inmilliSeconds:function (d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt(t2-t1);
},
 inSeconds:function(d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2-t1)/1000);
},
inDays:function (d1,d2){
    let t1 = d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2-t1)/(24* 3600 * 1000));
},
 inWeeks:function(d1,d2){
    let t1=d1.getTime();
    let t2 = d2.getTime();
    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
},
inMonths:function(d1,d2){
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
},
inYears:function (d1,d2){
    return d2.getFullYear() - d1.getFullYear();
}
}
console.log("Number of years since " + dString + ": " + dateDiff.inYears(d1, d2));
console.log("Number of months since " + dString + ": " + dateDiff.inMonths(d1, d2));
console.log("Number of weeks since " + dString + ": " + dateDiff.inWeeks(d1, d2));
console.log("Number of days since " + dString + ": " + dateDiff.inDays(d1, d2));
console.log("Number of seconds since " + dString + ": " + dateDiff.inSeconds(d1, d2));
console.log("Number of milliseconds since " + dString + ": " + dateDiff.inmilliSeconds(d1, d2));



