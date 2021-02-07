/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

// config
const min = 1;
const max = 50;
let numbers = new Array();

const nElements = prompt('How much elements?');

// build Array(100) with random values between max and min
for(i=0 ; i<nElements ; i++) numbers[i] = Math.floor(Math.random() * (max - min) +1);

console.log(`numbers = ${numbers}`);
console.log(`reversed numbers = ${numbers.reverse()}`);