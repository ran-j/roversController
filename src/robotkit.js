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
            direction = Directions[direction]
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
     * @param {[number]} gridPoints (OPTIONAL) Rouver grid [maxX, maxY] 
     * @returns "X position Y position Direction"
     * @type String
     */
    async move(commands, gridPoints = []) { }
}

module.exports = {
    Directions,
    Rover
}