let images = [
  "assets/img/author.jpg",
  "assets/img/bicycle.jpg",
  "assets/img/hobbie.jpg",
  "assets/img/sea.jpg",
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
