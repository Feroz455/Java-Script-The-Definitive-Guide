// Define an array of data and an object with a function property
let data = [10, 20];
let methods = { square: x => x * x };
// Create logging proxies for the array and the object
let proxyData = loggingProxy(data, "data");
let proxyMethods = loggingProxy(methods, "methods");
// Suppose we want to understand how the Array.map() method works
data.map(methods.square) // => [100, 400]
// First, let's try it with a logging Proxy array
proxyData.map(methods.square) // => [100, 400]
// It produces this output:
// Handler get(data,map)
// Handler get(data,length)
// Handler get(data,constructor)
// Handler has(data,0)
// Handler get(data,0)
// Handler has(data,1)
// Handler get(data,1)
// Now lets try with a proxy methods object
data.map(proxyMethods.square) // => [100, 400]
// Log output:
// Handler get(methods,square)
// Handler methods.square(10,0,10,20)
// Handler methods.square(20,1,10,20)
// Finally, let's use a logging proxy to learn about the iteration protocol
for (let x of proxyData) console.log("Datum", x);
// Log output:
// Handler get(data,Symbol(Symbol.iterator))
// Handler get(data,length)
// Handler get(data,0)
// Datum 10
// Handler get(data,length)
// Handler get(data,1)
// Datum 20
// Handler get(data,length)