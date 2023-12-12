function mincost(arr) {
    //write your code here
    // return the min cost
    let sumOf = [];
    while (arr.length >= 2) {
        arr.sort((a, b) => {
            return a - b;
        });

        sumOf.push(arr[0] + arr[1]);
        arr.splice(0, 2, arr[0] + arr[1]);
    }
    let sum = 0;
    for (let i = 0; i < sumOf.length; i++) {
        sum += sumOf[i];
    }
    return sum;
}



// In a browser environment, prompt will work as expected
const arr = prompt("Enter an array, e.g., [1, 2, 3]: ");
const parsedArr = JSON.parse(arr);
alert(mincost(parsedArr));   
       