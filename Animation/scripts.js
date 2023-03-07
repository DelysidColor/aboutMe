// анимация

let moveLeft = false;
let moveUp = false;
let circle = document.querySelector(".circle");
let timer;

circle.addEventListener("click", function () {
  if (timer) {
    timer = clearInterval(timer);
  } else {
    timer = setInterval(move, 20);
  }
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function move() {
  let ballContainer = document.querySelector(".ball-container");

  let ballX = getCoords(circle).left;
  let ballY = getCoords(circle).top;
  let containerX = getCoords(ballContainer).left;
  let containerY = getCoords(ballContainer).top;

  let posX = ballX - containerX;
  let posY = ballY - containerY;

  if (posX >= 400) moveLeft = true;
  if (posX <= 0) moveLeft = false;
  if (posY >= 300) moveUp = true;
  if (posY <= 0) moveUp = false;

  moveLeft ? (posX = ballX - 2) : (posX = ballX + 2);
  moveUp ? (posY = ballY - 1) : (posY = ballY + 1);

  circle.style.left = posX + "px";
  circle.style.top = posY + "px";
}

document.querySelector(".colorchanger").addEventListener("click", function () {
  document.querySelector(".ball-container").style.background =
    "rgb(219, 178, 245)";
});
