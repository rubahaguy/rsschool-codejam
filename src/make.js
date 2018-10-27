module.exports = (function() {
    const memo = [];

    return function sum(...args) {
        if (typeof args[0] === 'function') {
            const result = memo.reduce(args[0]);

            memo.length = 0; //It is necessary for passing more than one test ^_^
            return result;
        } else {
            args.forEach(item => {
                memo.push(item);
            });
    
            return sum;
        }
    }
})();


