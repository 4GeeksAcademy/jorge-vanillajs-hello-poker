/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/**
 * 1. Generar carta random
 * 2. Conseguir los elementos que queremos modificar
 *  2.1 Usamos el getElementsByClassName para conseguir todos los elementos que contienen los palos (HTML)
 * 3. Recorrer todos los elementos y modificar el contenido usando el paloAleatorio the carta random -> generarCarta
 * 4. Conseguir los elementos del dom que tienen la clase card-text (HTML)
 * 5. Modificar el contenido de htmlNumber con el valorAleatorio
 */

window.onload = function() {
  generateDOMCard();

  const generateNewCardButton = document.getElementById("push-to-generate");
  const interval = setTimeout(() => {
    generateDOMCard();
  }, 10000);

  generateNewCardButton.addEventListener("click", () => {
    generateDOMCard();
    clearTimeout(interval);
  });
};

function generarCarta() {
  var palos = ["♠", "♥", "♣", "♦"];
  var valores = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const aleatorio = Math.floor(Math.random() * palos.length);
  console.log(palos, palos[2], aleatorio);
  var paloAleatorio = palos[aleatorio];
  var valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { paloAleatorio, valorAleatorio };
}

function generateDOMCard() {
  const newCardValues = generarCarta();
  console.log(newCardValues);
  const htmlSymbols = document.getElementsByClassName("card-title");
  const htmlText = document.querySelector(".card-text");

  for (const element of htmlSymbols) {
    element.innerHTML = newCardValues.paloAleatorio;
    if (
      newCardValues.paloAleatorio === "♥" ||
      newCardValues.paloAleatorio === "♦"
    ) {
      element.classList.add("red-palo"); // Agregar clase adicional para palos rojos
      htmlText.classList.add("red-palo");
    } else {
      element.classList.remove("red-palo"); // Remover clase adicional si no es palo rojo
      htmlText.classList.remove("red-palo");
    }
  }

  // Sabemos que siempre nos dará un array, pero nosotros solo queremos el primero
  const htmlNumberCollection = document.getElementsByClassName("card-text");
  const htmlNumber = htmlNumberCollection.item(0);
  htmlNumber.innerHTML = newCardValues.valorAleatorio;
}
