function largestElement(numbers) {
    // let largest = 0;
    let largest = numbers[0]; // first number of array
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const numbers = [4, 3, 2, 67, 54, 34];
const oldest = largestElement(numbers);
const oldest2 = largestElement([-2, -5, -7, -9]);
console.log(oldest2);
