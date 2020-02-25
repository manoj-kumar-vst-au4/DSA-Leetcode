var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; ++i){
        while(nums[i] == val){
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
var arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr,1));
console.log(arr);