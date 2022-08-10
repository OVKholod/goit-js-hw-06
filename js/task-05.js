let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

let textValue = "Anonymous";

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.target.value;
});
