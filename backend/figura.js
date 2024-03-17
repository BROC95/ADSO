/*
1.	 Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas:
    Triangulo, cuadrado, circulo, rectangulo
*/
class figura {
  constructor(name) {
    this.name = name;
  }
  perimetro() {}
  area() {}
  message() {
    console.log(
      `Figura: ${
        this.name
      }, Perimetro: ${this.perimetro()}, Area: ${this.area()}`
    );
  }
  messageF() {
    return `Figura: ${
      this.name
    }, Perimetro: ${this.perimetro()}, Area: ${this.area()}`;
  }
}

class Circulo extends figura {
  constructor(radio) {
    super("Circulo");
    this.radio = parseFloat(radio);
  }

  perimetro() {
    let perim = 2 * Math.PI * this.radio;
    return perim.toFixed(2);
  }
  area() {
    let area = Math.PI * this.radio ** 2;
    return area.toFixed(2);
    // return area;
  }
  messageF() {
    return super.messageF() + ` | r = ${this.radio}`;
  }
}
class Triangulo extends figura {
  constructor(a, b, c, h) {
    super("Triangulo");
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.c = parseFloat(c);
    this.h = parseFloat(h);
  }

  area() {
    let area = (this.b * this.h) / 2;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = this.a + this.b + this.c;
    return perim.toFixed(2);
  }
  messageF() {
    return (
      super.messageF() +
      ` | a = ${this.a}, b = ${this.b}, c = ${this.c}, h = ${this.h}`
    );
  }
}
class Cuadrado extends figura {
  constructor(a) {
    super("Cuadrado");
    this.a = parseFloat(a);
  }

  area() {
    let area = this.a ** 2;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = 4 * this.a;
    return perim.toFixed(2);
  }
  messageF() {
    return super.messageF() + ` | a = ${this.a}`;
  }
}
class Rectangulo extends figura {
  constructor(a, b) {
    super("Rectangulo");
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  area() {
    let area = this.a * this.b;
    return area.toFixed(2);
  }
  perimetro() {
    let perim = 2 * (this.a + this.b);
    return perim.toFixed(2);
  }
  messageF() {
    return super.messageF() + ` | a = ${this.a}, b = ${this.b}`;
  }
}

export { Circulo, Triangulo, Cuadrado, Rectangulo };
