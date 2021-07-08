let grade=Number(prompt("Enter your grade"));
function start(grade) {
    // Step 1: define a let grade where you will add the value from the users input
    // Step 2: check if the grade is a number, if not, redirect the user back to the prompt (you can use a while looop)
    if(isNaN(grade)){
        grade=prompt("Enter your grade");
    }else{
        switch(grade){
            case 1: case 2: case 3:
                console.log("Low");
                break;
            case 4: case 5: case 6:
                console.log("Good");
                break;
            case 7: case 8: case 9:
                console.log("Great");
                break;
            case 10:
                console.log("Top notch");
                break;
        }
    }
    // Step 3: generate a switch where you will check the grade (also check the range) and match it with the expecting output. In the end, trigger the alert with the matched value
}