let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

let textValue = "Anonymous";

inputEl.addEventListener("keypress", (event) => {
  outputEl.textContent += event.key;
});
