
//Declare global variables to track game board size
const LINE_PIXEL_COUNT = 40
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2

//Track scores to display to user
let totalFoodEaten = 0
let totalDistanceTraveled = 0

//Shorten reference to game board
const gameContainer = document.getElementById('gameContainer')

//Generate the game board
const createGameBoardPixels = () => {
  for (let i = 1; i<= TOTAL_PIXEL_COUNT; i++) {
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id = "pixel${i}"></div>`;
  }
}

//Shorten references to game pixels
const gameBoardPixels = document.getElementsByClassName("gameBoardPixel")

let currentFoodPosition = 0

//create the randomly generated food items in the game board
const createFood = () => {
  gameBoardPixels[currentFoodPosition].classList.remove("food")
currentFoodPosition = Math.floor(Math.random()*TOTAL_PIXEL_COUNT)
gameBoardPixels[currentFoodPosition].classList.add('food')
}

//Start setting up snake behavior

const LEFT_DIR = 37
const UP_DIR = 38
const RIGHT_DIR = 39
const DOWN_DIR = 40

let snakeCurrentDirection = RIGHT_DIR

//Make sure that the user input is valid and change snake direction variable
const changeDirection = newDirectionCode => {
  if(newDirectionCode == snakeCurrentDirection) return;

  if (newDirectionCode == LEFT_DIR && snakeCurrentDirection !== RIGHT_DIR) {
    snakeCurrentDirection = newDirectionCode
  } else if(newDirectionCode == UP_DIR && snakeCurrentDirection !== DOWN_DIR) {
    snakeCurrentDirection = newDirectionCode
  }else if (newDirectionCode == RIGHT_DIR && snakeCurrentDirection !== LEFT_DIR) {
    snakeCurrentDirection = newDirectionCode
  } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection !== UP_DIR) {
    snakeCurrentDirection = newDirectionCode
  }
}

//set starting point for snake on load
let currentHeadPosition = TOTAL_PIXEL_COUNT/2

//Set initial length
let snakeLength = 200

//Start moving snake
