// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
const enterTerms = 5
for(let i = 0; i <= enterTerms; i++) {
    console.log(fibonacci(i));
}

