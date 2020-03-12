var searchInsert = function(nums, target) {
    for(var i = 0; nums[i] < target; i++);
        return nums[i+1] === target ? i+1 : i;
};


console.log(searchInsert([1,3,5,6],2))