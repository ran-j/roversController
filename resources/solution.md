# Solution

* Rover's will be reprent as Rover Class inside robotkit namespace.
* Will be a class to read the text file and config the Rover's
* Each move action must be async in order to preserve rover's position.
* Each move is base in Cartesian plane basing the (0,0) facing north.

# Evidence for Solution
* You can run this algorithm tests ( See [manual.md](../README.md) ).
* Exute this algorithm. ( See [manual.md](./manual.md) )

# Moviment

The moviment depends of each side the robot is facing. So algorithm must have a way to store side and the current x and y of robot. and check for moviment conditions like : if robot is facing north and command say "M" them the robot should move in Y direction.

# Turn

To turn the algorithm must get the current side that the robot is facing and mode according with the side graus.

# Example

If robot is facing north and the first command is to turn Left the robot should face East.


# Grid

The robot should execute moviment greater them his grid.

# Rules
 * Rover's can't walk beyond the lower left value.
 * Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.
 * Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

# Image 
> Assume that the square directly North from (x, y) is (x, y+1).

![draw](https://github.com/ran-j/roversController/blob/main/resources/img.png?raw=true)