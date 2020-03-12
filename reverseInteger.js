var reverse = function(x) {
    let r = parseInt(x.toString().split('').reverse().join(''))
    if (r < -2147483648 || r > 2147483647){
        return 0;
    }
    return (x < 0) ? -r : r
};