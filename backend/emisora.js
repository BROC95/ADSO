/*
4. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite las siguientes opciones:

a. Agregar una persona con los datos que se listan anteriormente.

b. Mostrar la información personal de una persona particular por medio de su posición en el vector.

*/

import { contenido, data } from "./questions.js";
// Open our database (replace "MyTestDatabase" with your desired database name)
let Q0 = document.getElementById("numberQ");
Q0.innerHTML = "Pregunta 4";
const QUESTION = data[5];

// console.log(data)
let Q3 = document.getElementById("question");
Q3.innerHTML = QUESTION;
var db;
let index = 0;
function initIndexDB() {
  console.log("data index");
  let request = indexedDB.open("Emisora-form");
  request.addEventListener("error", ErrorDB);
  request.addEventListener("blocked", blocketDB);
  request.addEventListener("success", initEmisora);
  request.addEventListener("upgradeneeded", createDB);
  let datsend = document.getElementById("emisoraForm");
  datsend.addEventListener("submit", setUser);
  let updateU = document.getElementById("Actualizar");
  updateU.addEventListener("click", getUserTable);
}
function ErrorDB(event) {
  alert("Error DB " + event.code + "   " + event.message);
}

function initEmisora(event) {
  db = event.target.result;
  console.log("INIT DB");
}
function createDB(event) {
  let NewBD = event.target.result;
  let warehouse = NewBD.createObjectStore("Users", { keyPath: "id" });
  warehouse.createIndex("searchByIndex", "index", { unique: false });
  console.log("create new DB");
  NewBD.close();
}
function blocketDB(event) {
  alert("Blocked DB " + event.code + "   " + event.message);
}

function setUser(event) {
  let request = indexedDB.open("Emisora-form");
  request.addEventListener("error", ErrorDB);
  request.addEventListener("blocked", blocketDB);
  request.addEventListener("success", initEmisora);
  //event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  let ind = document.getElementById("index").value;
  ind = index;
  const nombre = document.getElementById("nombre").value;
  const id = document.getElementById("id").value;
  const birthdate = document.getElementById("birthdate").value;
  const email = document.getElementById("email").value;
  const cityR = document.getElementById("CiudadResid").value;
  const cityO = document.getElementById("CiudadOrigin").value;
  const artistP = document.getElementById("ArtistaPref").value;
  const songs = document.getElementById("Canciones").value;

  // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  let transaction = db.transaction(["Users"], "readwrite");
  let warehouse = transaction.objectStore("Users");

  const user = {
    index: index.toString(),
    nombre: nombre,
    id: id,
    birthdate: birthdate,
    email: email,
    CiudadResid: cityR,
    CiudadOrigin: cityO,
    ArtistaPref: artistP,
    Canciones: songs,
  };
  warehouse.add(user);
  document.getElementById("nombre").value = "";
  document.getElementById("id").value = "";
  document.getElementById("birthdate").value = "";
  document.getElementById("email").value = "";
  document.getElementById("CiudadResid").value = "";
  document.getElementById("CiudadOrigin").value = "";
  document.getElementById("ArtistaPref").value = "";
  document.getElementById("Canciones").value = "";
  console.log("SETUSER");
  index = parseInt(index);
  index += 1;
  db.close();
}

function getUserTable(event) {
  console.log("TABLE");
  let info = indexedDB.open("Emisora-form");
  info.addEventListener("error", ErrorDB);
  info.addEventListener("blocked", blocketDB);
  info.addEventListener("success", initEmisora);
  let search = document.getElementById("search").value;

  console.log(search);

  let transaction = db.transaction(["Users"]);
  let warehouse = transaction.objectStore("Users");
  let indice = warehouse.index("searchByIndex");
  const request = indice.get(search);

  request.onsuccess = function (event) {
    const customer = event.target.result;
    if (customer) {
      console.log("Name is " + customer);
      console.log("Name is " + customer.ArtistaPref);
      console.log("Name is " + customer.Canciones);
      let nombre = document.getElementById("nameTd");
      let id = document.getElementById("idTd");
      let birthdate = document.getElementById("birthdateTd");
      let email = document.getElementById("emailTd");
      let cityR = document.getElementById("cityReTd");
      let cityO = document.getElementById("cityOrTd");
      let artistP = document.getElementById("artistTd");
      let cansiones = document.getElementById("songsTd");

      nombre.innerHTML = customer.nombre;
      id.innerHTML = customer.id;
      birthdate.innerHTML = customer.birthdate;
      email.innerHTML = customer.email;
      cityR.innerHTML = customer.CiudadResid;
      cityO.innerHTML = customer.CiudadOrigin;
      artistP.innerHTML = customer.ArtistaPref;
      cansiones.innerHTML = customer.Canciones;
    } else {
      console.log("Customer not found.");
      alert("No se encuentra registrado");
    }
  };
  db.close();
}

window.addEventListener("load", initIndexDB);
