function mincost(arr) {
    let totalCost = 0;
    arr.sort((a, b) => b - a);
    while (arr.length > 1) {
        let currentCost = arr[arr.length-1] + arr[arr.length-2];
        totalCost += currentCost;
        arr.pop();
        arr.pop();
        arr.push(currentCost);
        arr.sort((a, b) => b - a);
    }
    return totalCost;
}  
  
// Prompt user for an array input
const userInput = prompt("Enter an array, e.g., [1, 2, 3]: ");

// Parse the user input into an array
const parsedArr = JSON.parse(userInput);

// Call the mincost function and display the result using alert
alert(mincost(parsedArr));
 
       