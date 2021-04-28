// Your code here
class Polygon {
    constructor(numArray) {
        this.numArray = numArray
    }

    get countSides() {
        return this.numArray.length
    }

    get perimeter() {
        return this.numArray.reduce((a,b) => a + b)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let validator = (num1, num2, num3) => {
            return num1+num2 > num3
        }
        return (
            validator(this.numArray[0], this.numArray[1], this.numArray[2]) && 
            validator(this.numArray[1], this.numArray[2], this.numArray[0]) && 
            validator(this.numArray[2], this.numArray[0], this.numArray[1]) && 
            validator(this.numArray[1], this.numArray[0], this.numArray[2]) &&
            validator(this.numArray[2], this.numArray[1], this.numArray[0]) &&
            validator(this.numArray[0], this.numArray[2], this.numArray[1])
            )
    }
}

class Square extends Polygon {

    get isValid() {
        return (
            this.numArray[0] === this.numArray[1] &&
            this.numArray[1] === this.numArray[2] &&
            this.numArray[2] === this.numArray[3]
        )
    }

    get area() {
        return this.numArray[0] * this.numArray[1]
    }
}