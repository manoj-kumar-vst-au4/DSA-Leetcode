var findMedianSortedArrays = function(nums1, nums2) {
    var median = 0;
    var concatArr = nums1.concat(nums2).sort(function(a, b){return a-b});
    var len = concatArr.length;
    var num = len/2;
    if(len % 2 == 0){
        return ((concatArr[num]+concatArr[num-1])/2);
    }
    else
    {
        return (concatArr[(Math.ceil(num))-1]);
    }
     
};

console.log(findMedianSortedArrays([1,3],[-2,3]));
