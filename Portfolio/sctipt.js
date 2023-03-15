let images = [
  "/AboutMe/assets/img/hobbie.jpg",
  "/AboutMe/assets/img/bridge.jpeg",
  "/AboutMe/assets/img/grass.jpeg",
  "/AboutMe/assets/img/lake.jpeg",
  "/AboutMe/assets/img/sunset.jpeg",
];

let num = 0;

function forwImg() {
  let slider = document.querySelector(".slider-img");
  num++;

  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];

  document.querySelectorAll(".small-img img").forEach(function (el) {
    if (slider.src == el.src) {
      document.querySelector(".pic-description").innerHTML = el.dataset.text;
    }
  });
}

function backImg() {
  let slider = document.querySelector(".slider-img");
  num--;

  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];

  document.querySelectorAll(".small-img img").forEach(function (el) {
    if (slider.src == el.src) {
      document.querySelector(".pic-description").innerHTML = el.dataset.text;
    }
  });
}

document.querySelectorAll(".small-img img").forEach(function (el) {
  el.onclick = function () {
    document.querySelector(".slider-img").src = el.src;
    document.querySelector(".pic-description").innerHTML = el.dataset.text;
  };
});

//comments section

let button = document.querySelector(".feedback_button");
let comments = document.querySelector(".comments-container");

function editButtonListeners() {
  const buttonEditList = [...document.querySelectorAll(".button-edit")];

  buttonEditList.forEach((buttonEdit) => {
    buttonEdit.addEventListener("click", editComment.bind(this));
  });
}

function deleteButtonListeners() {
  const buttonDeleteList = [...document.querySelectorAll(".button-delete")];

  buttonDeleteList.forEach((buttondelete) => {
    buttondelete.addEventListener("click", deleteComment.bind(this));
  });
}

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
  commentText.classList.add("single-comment_texts");
  comment.appendChild(commentText);
  let name = document.createElement("input");
  name.classList.add("single-comment_name");
  name.readOnly = true;
  let text = document.createElement("textarea");
  text.classList.add("single-comment_text");
  text.readOnly = true;
  let nameValue = document.querySelector(".feedback_name").value;
  let textValue = document.querySelector(".feedback_comment").value;
  let textT = document.createTextNode(textValue);
  name.value = nameValue;
  text.appendChild(textT);
  commentText.appendChild(name);
  commentText.appendChild(text);
  //buttons div
  let buttons = document.createElement("div");
  buttons.classList.add("comment__buttons");
  comment.appendChild(buttons);
  let delButton = document.createElement("button");
  delButton.classList.add("comment__button");
  delButton.classList.add("button-delete");
  delButton.type = "button";
  buttons.appendChild(delButton);

  //delete button
  let delButtonImage = document.createElement("img");
  delButtonImage.src = "/AboutMe/assets/img/Comment-buttons/deleteButton.png";
  delButtonImage.alt = "deleteButton";
  delButton.appendChild(delButtonImage);

  let editButton = document.createElement("button");
  editButton.classList.add("comment__button");
  editButton.classList.add("button-edit");
  editButton.type = "button";
  buttons.appendChild(editButton);

  //edit button
  let editButtonImage = document.createElement("img");
  editButtonImage.src = "/AboutMe/assets/img/Comment-buttons/editButton.png";
  editButtonImage.alt = "editButton";
  editButton.appendChild(editButtonImage);

  //save button
  let saveButton = document.createElement("button");
  saveButton.classList.add("comment__button");
  saveButton.classList.add("button-save");
  saveButton.type = "button";
  saveButton.hidden = true;
  buttons.appendChild(saveButton);

  let saveButtonImage = document.createElement("img");
  saveButtonImage.src = "/AboutMe/assets/img/Comment-buttons/saveButton.png";
  saveButtonImage.alt = "saveButton";
  saveButton.appendChild(saveButtonImage);

  if (nameValue === "" || textValue === "") {
    alert("some field is empty!");
  } else {
    comments.appendChild(comment);
  }

  editButtonListeners();
  deleteButtonListeners();
}

const saveComment = (data) => {
  data.commentName.readOnly = true;
  data.commentText.readOnly = true;
  data.buttonEdit.hidden = false;
  data.buttonSave.hidden = true;

  data.buttonSave.removeEventListener("click", saveComment);
};

const deleteComment = (evt) => {
  const buttonDelete = evt.target;

  const comment = buttonDelete.closest(".single-comment");

  comment.remove();
};

const editComment = (evt) => {
  const buttonEdit = evt.target;

  const comment = buttonEdit.closest(".single-comment");
  const commentName = comment.querySelector(".single-comment_name");
  const commentText = comment.querySelector(".single-comment_text");
  const buttonSave = comment.querySelector(".button-save");

  commentName.readOnly = false;
  commentText.readOnly = false;
  buttonEdit.hidden = true;
  buttonSave.hidden = false;

  commentData = {
    commentName,
    commentText,
    buttonEdit,
    buttonSave,
  };

  buttonSave.addEventListener("click", () => saveComment(commentData));
};

editButtonListeners();
deleteButtonListeners();
