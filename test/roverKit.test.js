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

    test('Should check Rouver default position and set new Rouver position with Direction in string', () => {
        const rover = new Rover();
        const rouverStartPosition = rover.getCurrentLocation();
        expect(rouverStartPosition).toBe("0 0 N");
        rover.setPosition(3, 3, "E");
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

describe('Orientation test', () => {

    // L
    test('Should rotate L from North and answer 0 0 W', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("L")
        expect(result).toBe("0 0 W");
    });

    test('Should rotate LL from North and answer 0 0 S', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("LL")
        expect(result).toBe("0 0 S");
    });

    test('Should rotate LLL from North and answer 0 0 E', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("LLL")
        expect(result).toBe("0 0 E");
    });

    test('Should rotate LLLL from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("LLLL")
        expect(result).toBe("0 0 N");
    });

    // R

    test('Should rotate R from North and answer 0 0 E', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("R")
        expect(result).toBe("0 0 E");
    });

    test('Should rotate RR from North and answer 0 0 S', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("RR")
        expect(result).toBe("0 0 S");
    });

    test('Should rotate RRR from North and answer 0 0 W', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("RRR")
        expect(result).toBe("0 0 W");
    });

    test('Should rotate RRRR from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("RRRR")
        expect(result).toBe("0 0 N");
    });

    /// M
    test('Should rotate N from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("N")
        expect(result).toBe("0 0 N");
    });

    test('Should rotate NN from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("NN")
        expect(result).toBe("0 0 N");
    });

    test('Should rotate NNN from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("NNN")
        expect(result).toBe("0 0 N");
    });

    test('Should rotate NNNN from North and answer 0 0 N', async () => {
        const globalRouver = new Rover();
        globalRouver.setPosition(0, 0, Directions.North)
        globalRouver.setGrid([5, 5])
        const result = await globalRouver.move("NNNN")
        expect(result).toBe("0 0 N");
    });
})

describe('Moviment test in 5 5 grid', () => {

    test('Should be posited in (1 2 N) and move "LMLMLMLMM" and answer 1 3 N', async () => {
        const rover1 = new Rover();
        rover1.setPosition(1, 2, Directions.North)
        rover1.setGrid([5, 5])
        const result = await rover1.move("LMLMLMLMM")
        expect(result).toBe("1 3 N");
    })

    test('Should be posited in (3 3 E) and move "MMRMMRMRRM" and answer 5 1 E', async () => {
        const rover1 = new Rover();
        rover1.setPosition(3, 3, Directions.East)
        rover1.setGrid([5, 5])
        const result = await rover1.move("MMRMMRMRRM")
        expect(result).toBe("5 1 E");
    })
})