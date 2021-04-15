const { Directions, Rover } = require("../src/robotkit");
const { RobotController } = require("../src/robotController")
const mockStdIn = require('mock-stdin').stdin()

describe('Instance and methods test', () => {
    test('Should create a RobotController instance', () => {
        const controller = new RobotController();
        expect(controller instanceof RobotController).toBe(true);
    })

    test('Should move robots', async () => {
        const controller = new RobotController();
        expect(controller instanceof RobotController).toBe(true);
        controller.pathsFiles.push('./resources/paths.txt')
        controller.robots.push(new Rover())
        try {
            await controller.moveRobots();
        } catch (error) {
            expect(error).toBe(null)
        }
        
    })
})

describe('Console test', () => {
    const controller = new RobotController(true);
    expect(controller instanceof RobotController).toBe(true);
    controller.init();
    mockStdIn.send('1\n');
    mockStdIn.send('./resources/paths.txt\n');
    mockStdIn.end()
})
