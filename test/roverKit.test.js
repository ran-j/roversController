const { Directions, Rover } = require("../src/roverKit");

describe('Instance and methods test', () => {
    test('Should create a Rouver instance', () => {
        const rover = new Rover();
        expect(rover instanceof Rover).toBe(true);
    })
})