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

  generateNewCardButton.addEventListener("click", () => generateDOMCard());
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

  var paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  var valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { paloAleatorio, valorAleatorio };
}

function generateDOMCard() {
  const newCardValues = generarCarta();
  // console.log(generarCarta());
  const htmlSymbols = document.getElementsByClassName("card-title");
  // console.log(htmlSymbols);
  for (const element of htmlSymbols) {
    element.innerHTML = newCardValues.paloAleatorio;
  }

  // Sabemos que siempre nos dará un array, pero nosotros solo queremos el primero
  const htmlNumberCollection = document.getElementsByClassName("card-text");
  const htmlNumber = htmlNumberCollection.item(0);
  htmlNumber.innerHTML = newCardValues.valorAleatorio;
}
