function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btn = document.querySelector(".change-color");
const output = document.querySelector(".color");

btn.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  output.textContent = bodyEl.style.backgroundColor;
}
