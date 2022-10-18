class Histogram {
    constructor() {
        this.map = new Map();
    }
    count(key) { return this.Map.get(key) || 0; }
    has(key) {
        this.count(key) > 0;
    }
    get size() {
        return this.map.size;
    }
    add(key) { this.map.set(key, this.count(key) + 1); }
    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key)
        }
        else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }
    [Symbol.iterator]() {
        return this.map.keys();
    }
    keys() {
        return this.map.key();
    }
    valus() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }
}