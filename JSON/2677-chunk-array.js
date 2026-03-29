/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let result = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (((i + 1) % size) == 0) {
            result.push(temp);
            temp = [];
        }

    }

       if (temp.length > 0) {
        result.push(temp);
    }
    return result;
};
