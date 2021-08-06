
function smallestNumber(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const numbers = [5, 8, 9, 4, 3, 1, 7, -6];
const lowestNumber = smallestNumber(numbers);
console.log(lowestNumber);