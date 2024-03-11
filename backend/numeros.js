/*3.	Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente.*/

import { contenido, data } from "./questions.js";

const QUESTION = data[4];
let Q0 = document.getElementById("numberQ");
let Q3 = document.getElementById("question");
Q0.innerHTML = "Pregunta 3";
Q3.innerHTML = QUESTION;

let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
console.log(data3);
let arr1 = [1, 3, 6, 9, 17];
let arr2 = [2, 4, 10, 17];
data1.innerHTML = arr1;
data2.innerHTML = arr2;
let arr = arr1.concat(arr2);
arr.sort((a, b) => a - b);
console.log(arr);

data3.innerHTML = arr;
//  SET
localStorage.setItem("Array1", JSON.stringify(arr1));
localStorage.setItem("Array2", JSON.stringify(arr2));
localStorage.setItem("Array3", JSON.stringify(arr));
// GET
const localArray = JSON.parse(localStorage.getItem("Array2"));
console.log("LocalStore: " + localArray);

//  DELETE
const key = "Array2";
localStorage.removeItem(key);
// localStorage.clear()  // Delete all variables
