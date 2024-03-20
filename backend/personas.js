/*
2.	Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. 
Debe validar para cada ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.  


*/

import { contenido, data } from "./questions.js";

const QUESTION = data[2];
let Q0 = document.getElementById("numberQ");
let Q3 = document.getElementById("question");
Q0.innerHTML = "Pregunta 2";
Q3.innerHTML = QUESTION;

let personas = [20, 10, 18, 60, 89, 90, 120, 300];
let prom = 0;
let menores = 0;
let mayoresA = 0;
let mayores = 0;

const menu = "1 Ingresar persona\n 0 salir";
let ButtonA = document.getElementById("enterD");
ButtonA.addEventListener("click", () => {
  personas = [];
  prom = 0;
  menores = 0;
  mayoresA = 0;
  mayores = 0;
  alert("Ingrese datos De las personas");

  for (let i = 1; i < 11; i++) {
    try {
      let rad = parseInt(prompt("Ingresar  edad de la persona " + i + ": "));

      if (Number.isNaN(rad)) {
        // console.log(typeof rad+2313);
        alert("Lo siento es Nan: " + rad);
        rad = parseInt(
          prompt("Ingresar nuevamente la edad de la persona " + i + ": ")
        );

        if (Number.isNaN(rad)) {
          // console.log(typeof rad+2313);
          alert("Lo siento es Nan: " + rad);
        } else {
          personas.push(rad);
        }
      } else {
        personas.push(rad);
      }
    } catch (error) {
      alert("Debe ser un número");
      break;
    }
  }
  alert(personas);
  edades(personas);
});
function edades(personas) {
  for (let index = 0; index < personas.length; index++) {
    const element = personas[index];
    prom += element;
    if (element <= 120) {
      if (element > 18) {
        console.log("mayor " + element);
        mayores += 1;
      } else if (element < 18) {
        console.log("menor " + element);
        menores += 1;
      }
      if (element > 60) {
        console.log("Tercera " + element);
        mayoresA += 1;
      }
    } else {
      console.log("Muy viejo");
      alert("Muy viejo: " + element);
    }
  }
  let maximo = Math.max(...personas);
  let minimo = Math.min(...personas);
  let promedio = prom / personas.length;
  let data1 = document.getElementById("data1");
  let data2 = document.getElementById("data2");
  let data3 = document.getElementById("data3");
  let data4 = document.getElementById("data4");
  let data5 = document.getElementById("data5");
  let data6 = document.getElementById("data6");
  data1.innerHTML = "Personas ingresadas " + personas;
  data2.innerHTML = "Personas mayores de edad " + mayores;
  data3.innerHTML = "Personas mayores de 60 años " + mayoresA;
  data4.innerHTML = "Personas menores de edad " + menores;
  data5.innerHTML = "Edad maxima registrada " + maximo;
  data5.innerHTML = "Edad minima registrada " + minimo;
  data6.innerHTML = "Edad promedio registrada " + promedio;
  return [mayores, mayoresA, menores, maximo, minimo, promedio];
}

console.log("PERSONAS");
// console.log(prom / personas.length);
// console.log(mayores);
// console.log(mayoresA);
// console.log(menores);
// console.log(Math.max(...personas));
// console.log(Math.min(...personas));

let [mayore, mayores60, menoresE, maximo, minimo, promedio] = edades(personas);
// console.log(res+ "HOLA")
let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
let data4 = document.getElementById("data4");
let data5 = document.getElementById("data5");
let data6 = document.getElementById("data6");
data1.innerHTML = "Personas ingresadas " + personas;
data2.innerHTML = "Personas mayores de edad " + mayore;
data3.innerHTML = "Personas mayores de 60 años " + mayores60;
data4.innerHTML = "Personas menores de edad " + menoresE;
data5.innerHTML = "Edad maxima registrada " + maximo;
data5.innerHTML = "Edad minima registrada " + minimo;
data6.innerHTML = "Edad promedio registrada " + promedio;

export default mayores;
