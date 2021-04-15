"use strict";

//robot possible directions
const Directions = {
    North: 1,
    South: 2,
    East: 3,
    West: 4
}

//side to turn
const Sides = {
    Left: 0,
    Right: 1
}

class Rover {
    /**
     * Create a Rouver.
     */
    constructor() {
        this.x = 0;
        this.y = 0;
        this.currentDirection = Directions.North;
        this.gridPoints = []
    }

    /**
     * Get Rouver direction and side
     *
     * @param {Sides} Side Determinate if rover should turn Right or Left
     * @returns "X position Y position Direction"
     * @type String
     */
    getCurrentLocation() {
        return [
            this.x,
            this.y,
            Object.keys(Directions)[this.currentDirection - 1][0] // get A direction name from Directions object and get the first letter
        ].join(" ")
    }

    /**
     * Get Rouver grid
     *
     * @returns Rouver grid in [maxX, maxY]
     * @type [number]
     */
    getCurrentGrid() {
        return this.gridPoints;
    }

    /**
     * Set Rouver position
     *
     * @param {number} x Rouver x position
     * @param {number} y Rouver y position
     * @param {Directions} direction Rouver direction
     */
    setPosition(x = 0, y = 0, direction) {
        if (x < 0) throw new Error("X must be positive")
        if (y < 0) throw new Error("Y must be positive")
        if (direction === undefined) throw new Error("Inform a direction")
        if (Object.prototype.toString.call(direction) === "[object String]") {
            if (direction.length === 0) throw new Error("Inform a direction")
            let translateFromStringToDirection = {}
            Object.keys(Directions).forEach((str, index) => {
                translateFromStringToDirection[str[0]] = index + 1
            })
            //direct tranform input string to direction Obj 
            direction = translateFromStringToDirection[direction.toUpperCase()]
        }
        this.x = x;
        this.y = y;
        this.currentDirection = direction
    }

    /**
     * Set Rouver grid
     *
     * @param {[number]} gridPoints Rouver grid [maxX, maxY] 
     */
    setGrid(gridPoints = []) {
        if (gridPoints.length > 2) throw new Error("Grid should only have 2 indexes")
        this.gridPoints = gridPoints;
    }

    /**
     * Move Rouver to specific point
     *
     * @param {string} commands Comands for Rouver execute like "MMRMMRMRRM"
     * @returns "X position Y position Direction"
     * @type String
     */
    async move(commands) {
        //parse commands to be executed
        const instructions = commands.split("").map((str) => str.toUpperCase())
        //for each instruction execute an action
        for (const instruction of instructions) {
            switch (instruction) {
                case 'M':
                    this._moveForward(this.gridPoints[0], this.gridPoints[1]);
                    break;
                case 'L':
                    this._Rotate90(Sides.Left);
                    break;
                case 'R':
                    this._Rotate90(Sides.Right);
                    break;
                default:
                    break;
            }
        }
        return this.getCurrentLocation()
    }

    /**
     * Returns a min value if reverse is true if not returns the max value
     *
     * @param {Number} min The lower value
     * @param {Number} max The upper value
     * @param {boolean} reverse flag that indicates the operation
     * @returns A number min or max value depending of reverse boolean
     * @type Number
     */
    _transformValues(min, calc, reverse = false) {
        if (reverse) {
            return calc > min ? min : calc
        } else {
            return calc < min ? min : calc
        }
    }

    /**
     * Move rover according with direction
     *
     * @param {Number} maxX The max value of grid in x direction
     * @param {Number} maxY The max value of grid in y direction
     */
    _moveForward(maxX, maxY) {
        const minValue = 0;
        const getMinValue = true
        switch (this.currentDirection) {
            case Directions.North:
                this.y = this._transformValues(maxY, this.y + 1, getMinValue);
                break;
            case Directions.South:
                this.y = this._transformValues(minValue, this.y - 1);
                break;
            case Directions.East:
                this.x = this._transformValues(maxX, this.x + 1, getMinValue);
                break;
            case Directions.West:
                this.x = this._transformValues(minValue, this.x - 1);
                break;

        }
    }

    /**
     * Rotate rover according with direction
     *
     * @param {Sides} Side Determinate if rover should turn Right or Left
     */
    _Rotate90(Side = 0) {
        switch (this.currentDirection) {
            case Directions.North:
                if (Side === Sides.Right) {
                    this.currentDirection = Directions.East;
                } else { //left 
                    this.currentDirection = Directions.West;
                }
                break;
            case Directions.South:
                if (Side === Sides.Right) {
                    this.currentDirection = Directions.West;
                } else { //left 
                    this.currentDirection = Directions.East;
                }
                break;
            case Directions.East:
                if (Side === Sides.Right) {
                    this.currentDirection = Directions.South;
                } else { //left 
                    this.currentDirection = Directions.North;
                }
                break;
            case Directions.West:
                if (Side === Sides.Right) {
                    this.currentDirection = Directions.North;
                } else { //left 
                    this.currentDirection = Directions.South;
                }
                break;
            default:
                console.warn("Wrong direction")
                break;
        }
    }
}

module.exports = {
    Directions,
    Rover
}