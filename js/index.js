const obstaclesArr = []
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imgStreet = new Image();
imgStreet.src = "./images/road.png"
const imgCar = new Image()
imgCar.src = "./images/car.png"
imgCar.width = imgCar.width / 2
imgCar.height = imgCar.height / 2
let carX = 210


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
    console.log("Booo");
  };

  function startGame() {

  ctx.drawImage(imgStreet, 0, 0, 500, 700);
ctx.drawImage(imgCar, carX, 500, imgCar.width, imgCar.height)

}
}


function moveRight(){
  if(carX + 10 <= 421){
  carX += 10}

updateCanvas()
}

function moveLeft(){
  if(carX - 10 >= 0){
  carX -= 10}
  updateCanvas()

}

function updateCanvas(){
ctx.clearRect(0,0,500,700)
ctx.drawImage(imgStreet, 0, 0, 500, 700)
ctx.drawImage(imgCar, carX, 500, imgCar.width, imgCar.height)
}



// i got really stuck on the step-by-step logic of iteration 4 and 5


// function createObstacles(){


//   let obstacleY = 0
// let obstacleHeight = 20
// let obstaclewidth = (Math.floor(Math.random()) * 80) + 30

// let coinflip = Math.random

// if(coinflip <= 0.5){
//   obstacleX = 40
// } else {
//   obstacleX = 242 - width
// }

// let newObstacle = {
//   obstaclewidth: obstaclewidth,
//   obstacleHeight: obstacleHeight,
//   color: "red",
//   positionX: obstacleX,
//   positionZ: obstacleY
// } 

// obstaclesArr.push(newObstacle)

// ctx.fillStyle = newObstacle.color
// ctx.fillRect(newObstacle.obstacleX, obstacleY, obstaclewidth, obstacleHeight)
// }



document.addEventListener('keydown', event => {
  console.log('event keyCode', event.keyCode);
  switch (event.keyCode) {
    case 37:
      moveLeft(); 
      console.log('left');
      break;
    case 39:
      moveRight();
      console.log('right');
  }
updateCanvas()
})




