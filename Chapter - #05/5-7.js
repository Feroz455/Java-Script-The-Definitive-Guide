//5.7 Declarations
//5.7.1 const, let, and var
const TAU = 2 * Math.PI;
let radius = 3;
var circumference = TAU * radius;

//5.7.2 function
function area(radius) {
    return Math.PI * radius * radius;
}

//5.7.3 class 
class Circle {
    constructor(radious) {
        this.radious = radious;
    }
    area() { return Math.PI * this.radious * this.radious };
    circumference() {
        return 2 * Math.PI * this.radious;
    }
}
/**
 * 5.7.4 Import and export
 */
import Circle from './geometry/circle/.js';
