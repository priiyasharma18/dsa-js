function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        if (numMap.hasOwnProperty(complement)) {
            // If complement is found, return the indices
            return [numMap[complement], i];
        }
        // If not found, add the number and its index to the map
        numMap[nums[i]] = i;
    }
    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
