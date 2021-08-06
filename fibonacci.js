//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

/* 
3rd =2nd + 1st
4th =3rd + 2nd
5th =4th + 3rd
6th = 5th + 4th
nth = (n-1) + (n-2)
*/
const fibo = [0, 1];
for (let i = 2; i <=10 ; i++) {
    // const element = [i];
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


/* function fibonacci(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        // const element = [i];
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
console.log(fibonacci(15)); */


function fibonacci(num) {
    if (typeof num != 'number') {
        return 'please input number';
    }
    else if (num < 2) {
        return 'enter positive number greater than 2'
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        // const element = [i];
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
console.log(fibonacci(-23));