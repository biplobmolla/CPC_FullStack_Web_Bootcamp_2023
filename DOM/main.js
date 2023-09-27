const heading = document.getElementById("heading");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementsByTagName("h1");
const heading4 = document.getElementsByClassName("one");

// document.write(heading.innerHTML);
// document.write(heading.innerText);
// document.write(heading.textContent);

// HTML Element Create, remove, Text Change, Atrribute add, change, remove, style

// heading.innerHTML = "Jei Text";
// heading.innerText = "Jei Text";
// heading.textContent = "Jei Text";

// const attr = heading.getAttribute("class");
// const attr2 = heading.getAttribute("id");

// console.log(attr2);

// heading2.setAttribute("nameOfAttribute", "valueOfAttribute");
// heading2.setAttribute("style", "color: blue; font-size: 100px;");
// heading2.removeAttribute("class");
// heading.setAttribute("class", "kisu one");

// console.log(heading2);

// heading.style.color = "red";
// heading.style.backgroundColor = "green";
// heading.style = "color: red; background-color: green;";

const hoverBtn = document.querySelector("#hover__btn");
const clickBtn = document.querySelector("#click__btn");

// hoverBtn.addEventListener("click", function abc() {
//   console.log("Button has been clicked!!");
// });

// function abc(x) {
//   console.log("Button has been mouse overed!!" + x);
// }

// const rahabVai = document.createElement("div");
// rahabVai.setAttribute("style", "color: red;font-size: 100px;");
// rahabVai.innerHTML = "<h1>Hey Whatsupp</h1>";
// document.body.appendChild(rahabVai);
// console.log(rahabVai);

// clickBtn.addEventListener("mousemove", abc);

hoverBtn.remove();

clickBtn.addEventListener("click", function abc() {
  document.body.style.backgroundColor = "red";
});
