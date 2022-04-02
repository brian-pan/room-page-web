//select buttons
const arrowButtonLeft = document.querySelector(".arrow-button-left");
const arrowButtonRight = document.querySelector(".arrow-button-right");
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const logo = document.querySelector(".logo");
const image = document.querySelector(".icon-hamburger");

//select contents
const h1 = document.querySelector("h1");
const text = document.querySelector("p");
const home_1 = document.querySelector(".home-1");
let counter = 1;
let isNavBarOpen = false;

//hardcoded contents

const textCopy = [
  {
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.",
  },
  {
    title: "We are available all across the globe",
    content:
      "Manufactured with the best materials. Our modern furniture store provide a high level of quality. Our advanced technology ensures that every product is made as perfect as possible.",
  },
  {
    title: "Transform your home with us",
    content:
      "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.",
  },
];

//callback function
const setBgImg = () => {
  home_1.setAttribute(
    "style",
    `background-image: url('./images/desktop-image-hero-${counter}.jpg')`
  );
};

const setText = () => {
  h1.innerText = textCopy[counter - 1].title;
  text.innerText = textCopy[counter - 1].content;
};

const toggleNav = () => {
  ul.setAttribute("style", `display: ${isNavBarOpen ? "flex" : "none"}`);
  logo.setAttribute("style", `display: ${isNavBarOpen ? "none" : "flex"}`);
  isNavBarOpen
    ? (image.src = "./images/icon-close.svg")
    : (image.src = "./images/icon-hamburger.svg");
};

const onClickLeft = () => {
  if (counter > 1) {
    counter--;
  } else {
    counter = 3;
  }
  setBgImg();
  setText();
};

const onClickRight = () => {
  if (counter < 3) {
    counter++;
  } else {
    counter = 1;
  }
  setBgImg();
  setText();
};

//add button event
arrowButtonLeft.addEventListener("click", onClickLeft);
arrowButtonRight.addEventListener("click", onClickRight);
hamburger.addEventListener("click", () => {
  isNavBarOpen = !isNavBarOpen;
  toggleNav();
});
