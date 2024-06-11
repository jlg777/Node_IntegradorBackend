const userlogueado = JSON.parse(localStorage.getItem("user"));
const userLoged = document.getElementById("dropdown");
const userName = document.getElementById("userName");
const userCardTitle = document.querySelector(".card-title");
const userCardCorreo = document.querySelector(".correo");
const userCardName = document.querySelector(".name");
const userCardCreateAt = document.querySelector(".createAt");
const userCardUpdateAt = document.querySelector(".updateAt");

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

  userCardTitle.textContent = "Bienvenido";
  userCardCorreo.textContent = `Correo electrónico: ${userlogueado.correo}`;
  userCardName.textContent = `Nombre: ${userlogueado.nombre}`;
  userCardCreateAt.textContent = `Creado: ${userlogueado.createAt}`;
  userCardUpdateAt.textContent = `Actualizado: ${userlogueado.updateAt}`;
}
