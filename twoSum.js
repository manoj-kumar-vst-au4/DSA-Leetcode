var twoSum = function(nums, target) {
    var result = [];
    for(let i = 0; i < nums.length; ++i){
        for(let j = 0; j < nums.length; ++j){
            if(nums[i] + nums[j] == target){
                if(i != j){
                    result.push([i, j]);
                }
            }
        }
    }
    return result;
};

var arr = [1,2,6,4,5,5];

console.log(twoSum(arr, 10));