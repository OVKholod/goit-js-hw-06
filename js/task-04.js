let decrementBtn = document.querySelector('button[data-action="decrement"]');
let incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector("#value");

let count = 0;

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = --count;
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = ++count;
});
