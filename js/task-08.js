const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email.length == 0 || password.length == 0) {
    return alert`Заповніть всі поля`;
  } else {
    console.log(formData);
    e.currentTarget.reset();
  }
}
