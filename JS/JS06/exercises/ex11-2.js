let number = prompt('Enter number from 1 to 3: ', '');
let a_v = 0;
let v = 0;
let r = 0;
let result = 0

const cube = () => {
    a_v = prompt('Enter edge ', '');
    let cbV = Math.pow(a_v, 3);
    let cbS = 6 * Math.pow(a_v, 2);
    return [cbV, cbS]
}

const cylinder = () => {
    a_v = prompt('Enter edge ', '');
    let cV = (4 / 4) * a_v * 3 * Math.PI;
    let cS = 4 * a_v * 2 * Math.PI;
    return [cV, cS]
}

const sphere = () => {
    r = prompt('Enter radius ', '');
    a_v = prompt('Enter height ', '');
    let sV = r * 2 * Math.PI * a_v;
    let sS = 2 * r * Math.PI * (r * a_v)
    return [sV, sS]
}

console.log(number)
const geometricBodies = (number) => {

    //1. Nacin
    if (number == 1) {
        result = cube();
        return result
    }
    else if (number == 2) {
        result = cylinder();
        return result
    }
    else if (number == 3) {
        result = sphere();
        return result
    }
    else {
        return "Wrong number";
    }

        //"2. Nacin"
    // switch (parseInt(number)) {
    //     case "1":
    //         result = cube();
    //         return result
    //     case 2:
    //         result = cylinder();
    //         return result
    //     case 3:
    //         result = sphere();
    //         return result
    //     default:
    //         return "Wrong number";
    // }
}

console.log(geometricBodies(number))
/*
cheet sheet:
    cube: V=a3, S=6a2
    sphere: V=(4/3)r3π, S=4r2π;
    cylinder: V=r2πv, S=2rπ(r + v)
*/
/*
cheet sheet:
    cube: V=a3, S=6a2
    sphere: V=(4/3)r3π, S=4r2π;
    cylinder: V=r2πv, S=2rπ(r + v)
*/
