let file = "./frontend/assets/questions.txt";
// const location1 = window.location.pathname;
// const directoryPath1 = location.substring(0, location.lastIndexOf("/") + 1);
// if (directoryPath1 == "/" || directoryPath1 == "/ADSO/") {
//   file = "./frontend/assets/questions.txt";
// } else {
//   file = "../assets/questions.txt";
// }
let contenido = await fetch(file)
  .then((res) => res.text())
  .then((contenido) => {
    // Aquí puedes hacer lo que quieras con el contenido del archivo
    return contenido;
  }).catch(() => {
    file = "../assets/questions.txt";
  });

// console.log(contenido)
let img = "./frontend/assets/Figuras.png";
let data = contenido.split("\n");

let question = document.getElementById("question");
let p0 = document.getElementById("p0");
p0.innerText = "Preguntas";
let p1 = document.getElementById("p1");
p1.innerText = "Pregunta 1";
let p2 = document.getElementById("p2");
p2.innerText = "Pregunta 2";
let p3 = document.getElementById("p3");
p3.innerText = "Pregunta 3";
let p4 = document.getElementById("p4");
p4.innerText = "Pregunta 4";

data.forEach((num, idx, arr) => {
  // console.log(num, idx)
  question.innerHTML += num + "<br>";
  // question.innerHTML += idx + "<br>"

  if (idx == 1) {
    // console.log(idx);
    let nuevoElemento1 = document.createElement("div");
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
  }
});

export { contenido, data };
