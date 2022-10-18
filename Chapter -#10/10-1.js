// /*
// 10.1 Modules with Classes, Objects, and CLosures
// */
// const BitSet = (function () { // Set BitSet to the return value of this function
//     // Private implementation details here
//     function isValid(set, n) { }
//     function has(set, byte, bit) { }
//     const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
//     const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
//     // The public API of the module is just the BitSet class, which we define
//     // and return here. The class can use the private functions and constants
//     // defined above, but they will be hidden from users of the class
//     return class BitSet extends AbstractWritableSet {
//         // ... implementation omitted ...
//     };
// }());


const stats = (function () {
    const sum = (x, y) => x + y;
    const square = x => x * x;
    //A public function that will be exported 
    function mean(data) {
        return data.reduce(sum) / data.length;
    }
    //A public function that we will export 
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }
    return { mean, stddev };
}());
console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stddev([1, 3, 5, 7, 9]));
//10.1.1 Automating Closure-Based Modularity

const modules = {};
function require(moduleName) { return module[moduleName]; }
module["sets.js"] = (function () {
    const exports = {};
    //The contents of the sets.js file go there
    exports.BitSet = class BitSet { };
    return exports;
}());
modules["stats.js"] = (function () {
    const exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;
    exports.mean = function (data) { };
    exports.stddev = function (data) { };
    return exports;
}());
