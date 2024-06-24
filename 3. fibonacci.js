let prevNumber = 0
let curNumber = 1

for(let i=0; i <= 49; i++) {
    let fib = prevNumber + curNumber;
    console.log(prevNumber);
    console.log(i)
    prevNumber = curNumber;
    curNumber = fib;
}
