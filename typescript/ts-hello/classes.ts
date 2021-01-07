class Point {
    private name: string;
    x: number;
    y: number;

    /**
     * The question mark after the variable name
     * in the constructor signature makes the parameter
     * optional.
     * @param x Optional x
     * @param y Optional y
     */
    constructor(x?: number, y?: number, name: string = 'A') {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`Drawing point with values: (${this.x}, ${this.y})`)
    }

    distance(other: Point) {
        let d = Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2))
        console.log(`Distance between this and ${other} is: ${d}`)
    }

    public toString = () => {
        return `Point ${this.name}: X: ${this.x}, Y: ${this.y}`
    }

    /**
     * This is an accesor that defines a property.
     * 
     * We can define a set Name() property method too.
     */
    get Name() {
        return this.name;
    }
}

// Using default constructor
let p1 = new Point();
p1.x = 1;
p1.y = 2;
p1.draw();

// Using the constructor with parameters informed
let p2 = new Point(4, 6, 'B')
p2.draw()

p1.distance(p2);