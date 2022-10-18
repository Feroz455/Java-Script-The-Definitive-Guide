/**
 * 14-2 Object Extensibility
 */
// let proxy = new Proxy(target, handlers);
let t = { x: 1, y: 2 };
let p = new Proxy(t, {});
console.log(p.x);
console.log(delete p.y);


function accessTheDatabase() {
    return 42
}
let { proxy, revoke } = Proxy.revocable(accessTheDatabase, {});
console.log(proxy());
console.log(revoke());
// console.log(proxy());

let identity = new Proxy({}, {
    get(o, name, target) {
        return name;
    },
    has(o, name) {
        return true;
    },
    ownKeys(o) {
        throw new RangeError("Infinity number of properties");
    },
    getOwnPropertyDescriptor(o, name) {
        return {
            value: name,
            enumerable: false,
            writable: false,
            configurable: false
        };
    },
    set(o, name, value, target) {
        return false;
    },
    deleteProperty(o, name) {
        return false;
    },
    defineProperty(o, name, desc) {
        return false;
    },
    isExtensible(o) {
        return false;
    },
    getPrototypeOf(o) {
        return null;
    },
    setPrototypeOf(o, proto) {
        return false;
    }
});

identity.x // => "x"
identity.toString // => "toString"
identity[0] // => "0"
identity.x = 1; // Setting properties has no effect
identity.x // => "x"
delete identity.x // => false: can't delete properties either
identity.x // => "x"
// Object.keys(identity); // !RangeError: can't list all the keys
// for (let p of identity); // !RangeError


function readOnlyProxy(o) {
    function readonly() { throw new TypeError("Readonly"); }
    return new Proxy(o, {
        set: readonly,
        defineProperty: readonly,
        deleteProperty: readonly,
        setPrototypeOf: readonly,
    });
}
let o = { x: 1, y: 2 }; // Normal writable object
let p = readOnlyProxy(o); // Readonly version of it
p.x // => 1: reading properties works
p.x = 2; // !TypeError: can't change properties
delete p.y; // !TypeError: can't delete properties
p.z = 3; // !TypeError: can't add properties
p.__proto__ = {}; // !TypeError: can't change the prototype