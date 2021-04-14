const { Directions, Rover } = require("../src/robotkit");

describe('Instance and methods test', () => {
    test('Should create a Rouver instance', () => {
        const rover = new Rover();
        expect(rover instanceof Rover).toBe(true);
    })

    test('Should check Rouver default position and set new Rouver position', () => {
        const rover = new Rover();
        const rouverStartPosition = rover.getCurrentLocation();
        expect(rouverStartPosition).toBe("0 0 N");
        rover.setPosition(3, 3, Directions.East);
        const rouverNewPosition = rover.getCurrentLocation();
        expect(rouverNewPosition).toBe("3 3 E");
    })

    test('Should check Rouver default grid and set new rouver grid', () => {
        const rover = new Rover();
        const rouverStartGrid = rover.getCurrentGrid();
        expect(rouverStartGrid).toEqual([]);
        rover.setGrid([5, 5]);
        const rouverNewGrid = rover.getCurrentGrid();
        expect(rouverNewGrid).toEqual([5, 5]);
    })
})