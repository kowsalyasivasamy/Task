let arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
let n = arr.length;
let maxSum = 0;
let resultObj = [];

for (i = 0; i < n; i++) {
    let curr_sum = arr[i];
    let res = [arr[i]];
    for (j = i + 1; j <= n; j++) { 
        if (j == n) 
            break;
        curr_sum = curr_sum + arr[j];
        res.push(arr[j])
    } 
    if (curr_sum > maxSum) {
        maxSum = curr_sum;
    }
    resultObj.push({curr_sum, res})
}
const found = resultObj.find(element => element.curr_sum == maxSum);

arr = found.res.reverse();
n = arr.length;
let resultObj1 = [];

for (i = 0; i < n; i++) {
    let curr_sum = arr[i];
    let res = [arr[i]];
    for (j = i + 1; j <= n; j++) { 
        if (j == n) 
            break;
        curr_sum = curr_sum + arr[j];
        res.push(arr[j])
    } 
    if (curr_sum > maxSum) {
        maxSum = curr_sum;
    }
    resultObj1.push({curr_sum, res})
}
const found1 = resultObj1.find(element => element.curr_sum == maxSum);
result = found1.res.reverse();
console.log(maxSum, result);