const business = 450;
const minister = 350;
const army = 650;


if (business > minister) {
    console.log("business person er pola bigger");
}
else {
    console.log('minister er pola bigger');
}

if (business> minister && business > army) {
    console.log('business er pola boro');
}else if (minister > business && minister > army) {
    console.log("minister er pola boro");
}
else {
    console.log("army sobar boro");
}

var max = Math.max(business, minister, army);
console.log('largest is ', max);

function findLargest(first, second, third) {
    if (first > second && first > third) {
        return "largest is "+ first;
    }
    else if (second > third && second > first) {
        return 'second is the largest';
    }
    else {
        return 'third is the largest';
    }
}
let maxNumber = findLargest(1300, 687, 977);
console.log(maxNumber);


