class Polygon {
    calculateArea(){
        
    }
}

class Triangle extends Polygon{
    calculateArea(base, height) {
        return (base*height)/2
    }   
}

class Square extends Polygon {
    calculateArea(side) {
        return (side*side)
    }
}

class Rectangle extends Polygon {
    calculateArea(side1, side2) {
        return side1*side2
    }
}

const triangle = new Triangle();
const square = new Square();
const rectangle = new Rectangle();

triangle.calculateArea(2,4);
square.calculateArea(2);
rectangle.calculateArea(3,6);