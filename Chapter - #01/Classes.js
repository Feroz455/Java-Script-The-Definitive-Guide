//uses of classes in javascript
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };

}
let p = new point(1, 1);
console.log(p.distance());