module.exports = (function() {
    const result = [];
    let current = 0;

    return function reqursion(tree) {
        if (current === 0) {
            result.length = 0; //It is necessary for passing more than one test ^_^
        }

        current++;

        if (result[current - 1] === undefined) {
            result.push([]);
        }

        result[current - 1].push(tree.value);

        if (tree.left !== undefined || tree.right !== undefined) {
            if (tree.left !== undefined) {
                reqursion(tree.left);
            }

            if (tree.right !== undefined) {
                reqursion(tree.right);
            }
        } 

        if (current === 1) {
            current = 0; //It is necessary for passing more than one test ^_^
            return result;
        } else {
            current--; 
        }
    };
})();