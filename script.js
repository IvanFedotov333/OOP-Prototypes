"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;
    if (this.selector.startsWith(".")) {
      element = document.createElement("div");
      element.className = this.selector.slice(1);
    } else if (this.selector.startsWith("#")) {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
    } else {
      element = document.createElement("div");
    }
    element.style.cssText = `
height: ${this.height};
width: ${this.width};
background:${this.bg};
font-size:${this.fontSize}`;

    element.textContent = "Hello!";
    return element;
  };
};
const newElement = new DomElement(
  ".my-block",
  "100px",
  "200px",
  "green",
  "18px",
);

const createdElement = newElement.createElement();

document.body.append(createdElement);

const newNewElement = new DomElement(
  ".square",
  "100px",
  "100px",
  "yellow",
  "14px",
);

const newCreatedElement = newNewElement.createElement();
newCreatedElement.style.position = "absolute";
newCreatedElement.style.top = "0px";
newCreatedElement.style.left = "0px";

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(newCreatedElement);
  document.addEventListener("keydown", (e) => {
    let top = parseInt(newCreatedElement.style.top) || 0;
    let left = parseInt(newCreatedElement.style.left) || 0;
    if (e.key === "ArrowDown") {
      top += 10;
    } else if (e.key === "ArrowUp") {
      top -= 10;
    } else if (e.key === "ArrowLeft") {
      left -= 10;
    } else if (e.key === "ArrowRight") {
      left += 10;
    }

    newCreatedElement.style.top = top + "px";
    newCreatedElement.style.left = left + "px";
  });
});
