const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");
var user1 = document.getElementById("InputEmail");

user1.focus();

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente

    var user = document.getElementById("InputEmail").value;
    var pass = document.getElementById("InputPassword").value;

    if (user.length < 6) {
      alert("El nombre debe poseer al menos 6 caracteres");
      document.getElementById("InputEmail").focus();
      return; // Detiene la ejecución del código si la validación falla
    }

    if (pass.length < 8) {
      alert("La contraseña debe poseer al menos 8 caracteres");
      document.getElementById("InputPassword").focus();
      return; // Detiene la ejecución del código si la validación falla
    }

    var datos = {
      email_user: user,
      pass_user: pass,
    };

    localStorage.setItem("user", JSON.stringify(datos));
    console.log(localStorage.getItem("user"));
    // Redirigir al usuario a login.html
    window.location.href = "../index.html";
  });
/*
const form = document.getElementById("loginForm");
const user = document.getElementById("InputEmail");
const pass = document.getElementById("InputPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (user.value.length < 6) {
    alert("El nombre debe poseer al menos 6 caracteres");
    user.focus;
  }
  if (pass.value.length < 8) {
    alert("La contraseña debe poseer al menos 8 caracteres");
  }
});*/
if (localStorage.getItem("user")) {
  // registo.innerHTML = user.email_user;
  // registo.href = "user.html";
  /*nuevoEnlace.textContent = user.email_user;
  nuevoElemento.appendChild(nuevoEnlace);
  nuevoElemento.classList.add("--bs-primary-text-emphasis");
  nuevoElemento.classList.add("nav-item");
  nuevoElemento.classList.add("nav-link");
  nuevoElemento.classList.add("mx-2");
  lista.appendChild(nuevoElemento);*/

  userLoged.classList.remove("invisible");
  userLoged.classList.add("visible");
  var userName1 = document.createElement("p");
  userName1.textContent = userlogueado.email_user;
  userName.appendChild(userName1);
}
