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
}
