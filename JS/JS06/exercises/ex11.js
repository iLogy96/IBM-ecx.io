/*cheet sheet:
    cube: V=a3, S=6a2
    sphere: V=(4/3)r3π, S=4r2π;
    cylinder: V=r2πv, S=2rπ(r + v)
*/
//funckija koja izvodi različite račune ovisno o caseu u switchu
function start() {
    do {
        menu();
    } while (confirm("Again?"));
    alert("Adio!")
}

function menu() {
    let geometricBody = Number(prompt("1.Cube 2.Clyinder 3.Sphere"));

    switch(geometricBody) {
        case 1:
            cube();
            break;
        case 2:
            cylinder();
            break;
        case 3:
            sphere();
            break;
        default:
            start();
            break;
    }
}

function cube() {
    do {
        let a = Number(prompt("Enter the length of cube side: "));
    } while (isNaN(a));

    let s =  6 * Math.pow(a, 2);
    let v =  Math.pow(a, 3);
    alert("Cube", v.toFixed(2), s.toFixed(2));
}
// dodati jos dve funkcije