let images = [
  "/aboutMe/assets/img/hobbie.jpg",
  "/aboutMe/assets/img/bridge.jpeg",
  "/aboutMe/assets/img/grass.jpeg",
  "/aboutMe/assets/img/lake.jpeg",
  "/aboutMe/assets/img/sunset.jpeg",
];

let num = 0;

function forwImg() {
  let slider = document.querySelector(".slider-img");
  num++;

  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function backImg() {
  let slider = document.querySelector(".slider-img");
  num--;

  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

document.querySelectorAll(".small-img img").forEach(function (el) {
  el.onclick = function () {
    document.querySelector(".slider-img").src = el.src;
  };
});

//comments section

let button = document.querySelector(".feedback_button");
let comments = document.querySelector(".comments-container");

button.addEventListener("click", newComment);

function newComment() {
  let comment = document.createElement("div");
  comment.classList.add("single-comment");
  let img = document.createElement("img");
  img.src =
    "https://cs1.livemaster.ru/storage/85/78/d30b03236bdd4ebe3fb3241f2cv8--kartiny-i-panno-kartina-maslom-koty-i-koshki-portret-kvadrat-.jpg";
  img.alt = "Avatar";
  comment.appendChild(img);
  let commentText = document.createElement("div");
  commentText.classList.add("single-comment_text");
  comment.appendChild(commentText);
  let name = document.createElement("p");
  name.classList.add("single-comment_name");
  let text = document.createElement("p");
  let nameValue = document.querySelector(".feedback_name").value;
  let textValue = document.querySelector(".feedback_comment").value;
  let nameT = document.createTextNode(nameValue);
  let textT = document.createTextNode(textValue);
  name.appendChild(nameT);
  text.appendChild(textT);
  commentText.appendChild(name);
  commentText.appendChild(text);

  if (nameValue === "" || textValue === "") {
    alert("some field is empty!");
  } else {
    comments.appendChild(comment);
  }
}
