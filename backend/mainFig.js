import { data } from "./questions.js";
import { Circulo, Triangulo, Cuadrado, Rectangulo } from "./figura.js";

const QUESTION = data[0];
const table = data[1];
let Q0 = document.getElementById("numberQ");
let Q1 = document.getElementById("question");
let Qt = document.getElementById("tabla");
Q0.innerHTML = "Pregunta 1";
Q1.innerHTML = QUESTION;
Qt.innerHTML = table;
let nuevoElemento1 = document.createElement("div");
let img = "./frontend/assets/Figuras.png";
nuevoElemento1.innerHTML = `<img src="${img}" id="imagen" alt=""></img>`;
Qt.appendChild(nuevoElemento1);

const location = window.location.pathname;
const directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
console.log(directoryPath);
if (directoryPath == "/" || directoryPath == "/ADSO/") {
  img = "./frontend/assets/Figuras.png";
  nuevoElemento1.innerHTML = `<img src="${img}" id="imagen" alt=""></img>`;
  question.appendChild(nuevoElemento1);
} else {
  img = "../assets/Figuras.png";
  nuevoElemento1.innerHTML = `<img src="${img}" id="imagen" alt=""></img>`;
  question.appendChild(nuevoElemento1);
}

let circ = new Circulo(30);
circ.message();

let tria = new Triangulo(2, 2, 2, 2);
tria.message();
let rect = new Rectangulo(2, 3);
rect.message();
let cuad = new Cuadrado(2);
cuad.message();

let data1 = document.getElementById("data1");
data1.innerHTML = tria.messageF();
let data2 = document.getElementById("data2");
data2.innerHTML = rect.messageF();
let data3 = document.getElementById("data3");
data3.innerHTML = cuad.messageF();
let data4 = document.getElementById("data4");
data4.innerHTML = circ.messageF();

let ButtonA = document.getElementById("enterD");

var click = ButtonA.addEventListener("click", () => {
  alert("Ingrese datos Circulo de acuerdo a la tabla:");
  let rad = prompt("Ingresar  radio");
  let circN = new Circulo(rad);
  circ.message();
  data4.innerHTML = circN.messageF();

  alert("Ingrese datos Triangulo de acuerdo a la tabla:");
  let a = prompt("Ingresar  a");
  let b = prompt("Ingresar  b");
  let c = prompt("Ingresar  c");
  let h = prompt("Ingresar  h");
  let triaN = new Triangulo(a, b, c, h);
  tria.message();
  data1.innerHTML = triaN.messageF();

  alert("Ingrese datos Rectangulo de acuerdo a la tabla:");
  let ar = prompt("Ingresar  a");
  let br = prompt("Ingresar  b");
  let rectN = new Rectangulo(ar, br);
  rect.message();
  data2.innerHTML = rectN.messageF();
  alert("Ingrese datos Cuadrado de acuerdo a la tabla:");
  data2.innerHTML = rectN.messageF();
  let ac = prompt("Ingresar  a");
  let cuadN = new Cuadrado(ac);
  cuad.message();
  data3.innerHTML = cuadN.messageF();
  alert("Actualizar");
});
