const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  if (event.target.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
