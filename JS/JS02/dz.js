//1.zad
(function myFunction() {
    var str = 'bilo kakav string'
    var str2=str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
})()

//2.zad
function myFunction2(){
    var str = 'Random';
    for(let i = 0; i< str.length; i++){
        console.log(str.charAt(i));
    }
}
myFunction2()
//3.zad
let age = 24
let reversed ="";
function myFunction3(name){
    if (age % 2 != 0) {
        for(var i=name.length-1; i>=0; i--){
            reversed+=name[i];
        }
        console.log(reversed)
    }
    else if(age>100 || name.length>10){
        console.log(name);
    }
    else{
        console.log(name + ' ' + age);
    }
}
myFunction3('John');
//4.zad
var text ='';
var i = 0;
function myFunction4(){
    do {
        text+='The number is ' + i + ', ';
        i++;
    }
    while (i<5);
    console.log(text)
}
myFunction4()

