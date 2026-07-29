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
