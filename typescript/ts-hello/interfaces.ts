
// One way to define an abstract object in-line
let drawPoint = (point: {x: number, y: number}) => {
    console.log(`Received coordinates: x=${point.x}, y=${point.y}`)
}

drawPoint({x: 1, y: 2})

// However it is better to define an interface
// because other functions in our code might need them
// Important: Interfaces can only have declarations, not definitions
// such as an actual value or a function implementation
interface Point {
    x: number,
    y: number
}

let drawPoint2 = (point: Point) => {
    console.log(`Received coordinates: x=${point.x}, y=${point.y}`)
}

drawPoint2({
    x: 2,
    y: 4
})