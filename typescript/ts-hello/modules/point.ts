export class Point2 {

    private _name: string;
    private _x: number;
    private _y: number;

    constructor(name: string, x: number, y: number) {
        this._name = name;
        this._x = x;
        this._y = y;
    }

    public toString = () => {
        return `Point '${this._name}': (${this._x}, ${this._y})`
    }

    get name() {
        return this._name;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

}