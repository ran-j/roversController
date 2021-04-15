const { RobotController } = require("./robotController")
const { Directions, Rover } = require("./robotkit");


const controller = new RobotController();
controller.init();

// controller.pathsFiles.push('./resources/paths.txt')
// controller.robots.push(new Rover())
// controller.moveRobots()