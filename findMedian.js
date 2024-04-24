// programmed on programiz online js editor

const findMedian = () => {
    const length = prompt("enter the length of the array: \n");
    if(length<=0 || length==1) {
        return console.log("invalid length, try again with a valid length \n");
    }
    let arr = [];
    
    for(let i=0; i<length; i++) {
        arr[i] = parseInt(prompt(`enter the value for ${i+1}st value in the array: \n`));
    }
    
    console.log(arr);

    if(length==2) {
        return console.log(`${arr[0] + arr[1]} is the median`);
    }
    
    let index = 0;
    let median;    
    
    if(length%2==0) { // for even
       index = Math.round((length/2)-1)
        median = Math.round((arr[index] + arr[index+1])/2);
        console.log(`if`);
        return console.log(`${median} is the median`);
    } else { // for odd
        index = Math.round((length/2)-1);
        console.log(`if else`);
       return console.log(`${arr[index]} is the median`)
    }
};

findMedian();
