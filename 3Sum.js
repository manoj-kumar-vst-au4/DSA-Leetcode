// Given an array nums of n integers,
// are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function(nums) {
    let result = [];
    for(let a = 0; a < nums.length; ++a){
        for(let b = a+1; b < nums.length; ++b){
            for(let c = b+2; c < nums.length; ++c){
                if(nums[a] + nums[b] + nums[c] == 0){
                    if(nums[a] != nums[b] != nums[c]){
                         result.push([nums[a], nums[b], nums[c]]);
                    }
                }
            }
        }
    }
    return result.sort();
};

console.log(threeSum(nums));
