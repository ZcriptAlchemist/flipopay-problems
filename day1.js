// program written in programiz js editor
// programs are written separately and should run seperately

// 1st problem - find the largest integer in the array

const findLargest = () => {

let n = prompt("enter the length of the array \n");
if(n<=0) {
    console.log("enter a valid length for the array")
    return;
}
// [ '67', '3', '99', '1111', '3' ]
let arr = [];

for(let i = 0; i<n; i++) {
    arr[i] = prompt(`enter the ${i + 1}st number \n`);
}

console.log(arr);

let largest = arr[0];
for(let i=1; i<n; i++) {
    if(parseInt(largest) < parseInt(arr[i])) {
    // if(arr[i] > largest) {
        largest = arr[i]
    }
}

console.log(`${largest} is the largest`);
}

findLargest();

// second problem - find two integers required to get the given integer through addition

const findTwoIntegers = () => {

let n = prompt("enter the length of the array \n");
let showArr = true;
if(n<=0) {
    console.log("enter a valid number for length")
    showArr = false;
    return;
}

let arr = [];
for(let i = 0; i<n; i++) {
    arr[i] = parseInt(prompt(`enter the ${i + 1}st number \n`));
}

if(showArr) {
    console.log(arr);        
}

const ans = prompt("enter the number to find through addition \n")

let first = arr[0];
let second = arr[1];

if(first + second == ans) {
    console.log(`${[first,second]} are the values required to get ${ans} through addition`);
    return;
}

for(let i = 0; i < n; i++) {
    for(let j = 2; j<n; j++) {
        if(arr[i]+arr[j] == ans) {
            first = arr[i];
            second = arr[j];
        }
    }
}

console.log(`${first} and ${second} are the values required to get ${ans} through addition`);
}

findTwoIntegers();
