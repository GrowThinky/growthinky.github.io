let colors = ["#faa1ac", "#A0E7E5", "#B4F8C8", "#7685b1","#FBE7C6"];
var i = 0;
var txt1 = "Hi, my name is";
var txt = "I'm a programmer based in Marburg, Germany."; /* The text */
var txt0 = "Christoph Heindl";
var speed = 30; /* The speed/duration of the effect in milliseconds */
var speed0 = 20;


(function () {
  document.body.style.zoom="90%";
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setInfoEventListener();

  setInterval(() => {
    setRandomPhoto();
  }, 5000);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);


  let list = document.body.classList;
  list.add("dark-mode");
  typeWriter1();
})();

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    event.target.checked ?  list.add("dark-mode") : list.remove("dark-mode");
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.querySelectorAll("a")).forEach((e) => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button, i")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor());
  });
}

/* Photos */

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 4) + 1;
  document.getElementById("propic").src = `face${num}.jpg`;
}

/* Bio Toggles */

function setInfoEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", infoToggle);
  });
}

function infoToggle(e) {
  let infoType = e.target;
  let color = getRandomColor();
  off(infoType);
  infoType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let infoTypeElement = document.getElementsByClassName(infoType.id)[0];
  if (infoTypeElement !== undefined) infoTypeElement.classList.add("show");
}

function off(infoType) {
  Array.from(document.getElementsByTagName("button")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("info")).forEach((e) => {
    e.classList.remove("show");
  });
}

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("hi").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  } else {
    i=0;
    typeWriter0();

  }
}

function typeWriter0() {
  if (i < txt0.length) {
    document.getElementById("name").innerHTML += txt0.charAt(i);
    i++;
    setTimeout(typeWriter0, speed0);
  } else{
    i=0;
    typeWriter();

  }
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}
