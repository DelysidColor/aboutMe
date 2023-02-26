// анимация

let moveLeft = false;
let moveUp = false;
let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");
let timer;

function runAnimation() {
  timer = setInterval(move, 20);
  startBtn.disabled = true;
}

function stopAnimation() {
  clearInterval(timer);
  startBtn.disabled = false;
}

startBtn.addEventListener("click", function () {
  runAnimation();
});

stopBtn.onclick = () => {
  stopAnimation();
};

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function move(time) {
  let circle = document.querySelector(".circle");
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

// todo list найден в интернете и немного отредактирован
let myNodelist = document.querySelectorAll(".todo_li");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.classList.add("todo_li");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector(".todo");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let li = document.createElement("li");
  li.classList.add("todo_li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
