
"use strict"

function letterCombinations(digits) {

    if (digits.length === 0) {return ""};

    let res = [];

    let keys = {
        2: ["a", "b", "c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    }

    for (let i = 0; i < keys[digits].length; i++) {
        console.log(keys[digits][i]);   
        res.push(keys[digits][i]);     
    }

    return res;
}



// console.log(letterCombinations("2"));



function maxSubArr(nums) {
    let maxSum = 0;
    let currentSum = 0;

    for (let number of nums) {
        currentSum = Math.max(0, (currentSum + number));
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// console.log(maxSubArr([2, -3, 2, 2, -2, 10]));