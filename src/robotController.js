const fs = require("fs");
const fsPromises = fs.promises;
const readline = require("readline");
const { Directions, Rover } = require("./robotkit");

class RobotController {

    constructor(autoDisconnect) {
        this.robots = []
        this.pathsFiles = []
        this.autoDisconnect = autoDisconnect
        console.log("Connecting.... \n ");
    }

    init() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.rl.on("close", function () {
            console.log("\n Connection lost.....");
            if (this.autoDisconnect) {
                process.exit(0);
            }
        });

        this.rl.question("Number of robots: ", async (robots) => {
            this.configRobots(parseInt(robots), 0)
        });
    }

    async configRobots(max, index) {
        const robotPath = await this.askForTXTPath(index)
        if (robotPath) {
            this.robots.push(new Rover())
            this.pathsFiles.push(robotPath)
        } else {
            console.warn(`Fail to config robot: ${index}, path is invalid`)
        }
        index += 1
        if (index >= max) {
            return this.moveRobots()
        } else {
            return await this.configRobots(max, index)
        }
    }

    askForTXTPath(index) {
        return new Promise((resolve) => {
            this.rl.question(`Path file for robot ${index}: `, function (givenPath) {
                try {
                    if (fs.existsSync(givenPath)) {
                        resolve(givenPath)
                    } else {
                        resolve("")
                    }
                } catch (err) {
                    console.error(err)
                    resolve("")
                }
            })
        })
    }

    async moveRobots() {
        try {
            for (const pathFile of this.pathsFiles) {
                const index = this.pathsFiles.indexOf(pathFile);
                if (this.robots[index]) {
                    const data = await fsPromises.readFile(pathFile, 'utf8');
                    const inputs = data.split("\n")
                    for (const command of inputs) {
                        //clean input
                        let clearInput = (command.replace("\n", "").replace("\r", "")).replace(/\s/g, '')
                        if (clearInput.length === 2 && !isNaN(clearInput)) {//set grid
                            const gridValues = clearInput.split("").map((str) => parseInt(str))
                            this.robots[index].setGrid(gridValues)
                        } else if (clearInput.length === 3 && !isNaN(clearInput[0])) { //set position
                            const [x, y, direction] = clearInput.split("")
                            this.robots[index].setPosition(parseInt(x), parseInt(y), direction)
                        } else if (command.length > 0) { //command
                            const robotPosition = this.robots[index].getCurrentLocation()
                            const result = await this.robots[index].move(clearInput)
                            console.log(`\n Robot: ${index} moved to from ${robotPosition} to ${result}`)
                        }
                    }
                    console.log("\n Done executing")
                    if (this.rl) this.rl.close()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    RobotController
}