module.exports = function sumOfOther(arr) {
    const result = [];

    arr.forEach((item, index, array) => {
        for (let i = 0; i < array.length; i++) {
            if (index !== i) {
                if (result[index] !== undefined){
                    result[index] += array[i];
                } else {
                    result[index] = array[i];
                }
                
            }
        }
    });
    return result;
}