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
const img = "./frontend/assets/Figuras.png";
nuevoElemento1.innerHTML = `<img src="${img}" id="imagen" alt=""></img>`;
Qt.appendChild(nuevoElemento1);
let circ = new Circulo(30);
circ.message();

let tria = new Triangulo(2, 2, 2, 2);
tria.message();
let rect = new Rectangulo(2, 3);
rect.message();
let cuad = new Cuadrado(2, 2, 2, 2);
cuad.message();

let data1 = document.getElementById("data1");
data1.innerHTML = tria.messageF();
let data2 = document.getElementById("data2");
data2.innerHTML = rect.messageF();
let data3 = document.getElementById("data3");
data3.innerHTML = cuad.messageF();
let data4 = document.getElementById("data4");
data4.innerHTML = circ.messageF();
