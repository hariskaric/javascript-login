const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameLogin = "new_user";
const passwordLogin = "123456789";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  provjeriInput();
});
function provjeriInput() {
  // trim() uklanja bijeli prostor s obje strane.
  const usernameVrijednost = username.value.trim();
  const passwordVrijednost = password.value.trim();
  if (usernameVrijednost === "") {
    setErrorFor(username, "Username polje ne može biti prazno!");
  } else if (usernameVrijednost.length < 5) {
    setErrorFor(username, "Username ne smije biti manji od 5 karaktera!");
  } else if (usernameVrijednost !== usernameLogin) {
    setErrorFor(username, "Username nije tačan!");
  } else if (usernameVrijednost === usernameLogin) {
    setSuccessFor(username, "Username je tačan!");
  }
  if (passwordVrijednost === "") {
    setErrorFor(password, "Password polje ne može biti prazno!");
  } else if (usernameVrijednost.length < 5) {
    setErrorFor(password, "Password ne smije biti manji od 5 karaktera!");
  } else if (passwordVrijednost !== passwordLogin) {
    setErrorFor(password, "Password nije tačan!");
  } else if (passwordVrijednost === passwordLogin) {
    setSuccessFor(password, "Password je tačan!");
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control successs";
}
