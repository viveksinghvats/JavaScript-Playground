const express = require('express');
const route = express.Router();

route.get('/asy', async (req, res) => {
    // Example usage:
    const nums = [1, 2, 2];
    const subsets = findSubsets(nums);
    console.log(subsets);
    return res.status(200).send({ message: 'Ok' });
});

function findSubsets(nums) {
    let result = [];

    // Sort the array to handle duplicates
    nums.sort();

    // Helper function for backtracking
    function backtrack(start, current) {
        result.push([...current]);  // Add a copy of the current subset to the result

        for (let i = start; i < nums.length; i++) {
            // Skip duplicates by checking if the current element is the same as the previous one
            if (i > start && nums[i] === nums[i - 1]) continue;

            // Include nums[i] in the current subset
            current.push(nums[i]);

            // Recurse to generate the next subsets
            backtrack(i + 1, current);

            // Backtrack: remove the last element to explore other possibilities
            current.pop();
        }
    }

    // Start backtracking from index 0 with an empty subset
    backtrack(0, []);
    return result;
}





module.exports = route;

