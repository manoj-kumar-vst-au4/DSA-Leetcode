var arr = [1,2,3,4,5,4,5,4,5,6,7,8,5,6,7];


var findElem = function(array, elem){
    var result = [];
    for(let i = 0; i < array.length; ++i){
        if(array[i] == elem){
            result.push(i);
        }
    }
    return result;
};

console.log(findElem(arr, 6));