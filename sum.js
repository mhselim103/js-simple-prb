
// sum with for loop 

const numbers = [33, 55, 55, 634, 99];

// loop er baire na rakhle bar bar zero hoye jabe kono kisu bar bar kora lagle mane jog biyog gun vag korar jonno loop chalaile variable baire set korte hobe
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];   // find out the array element
    // console.log(element);
    
    sum = sum + element;
}
// sekhetre console log o baire dite hobe 
console.log(sum); 





// sum array with function

function arraySum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];   // find out the array element
        sum = sum + element;

        // loop er vitore return dile seta ekbar korei off hoye jabe .karon return sob kisu off kore dey 
    }

    return sum;
    
}

console.log(arraySum(numbers));