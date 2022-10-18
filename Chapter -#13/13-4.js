/**
 * 13.4.3 Asynchronous Generators
 */


function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        yield count;
    }
}