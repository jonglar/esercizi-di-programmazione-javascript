/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

// config
const min = 1;
const max = 90;
const nElements = prompt('How much elements?');
let numbers = new Array(parseInt(nElements));
let stakes = new Array(parseInt(nElements));

// build Array(nElements) with random values between max and min
for(i=0 ; i<numbers.length ; i++){
  let uniqueRandom = 0;
  let duplicate = true;
  do {
    uniqueRandom = Math.floor(Math.random() * (max - min) +1);
    duplicate = numbers.find(e => e == uniqueRandom);
    !duplicate ? numbers[i] = uniqueRandom : '';
  } while (duplicate);
}

console.log(`Unique numbers = ${numbers}`);

// build Array(nElements) with random values between max and min
for(i=0 ; i<stakes.length ; i++){
  let uniqueRandom = 0;
  let duplicate = true;
  do {
    uniqueRandom = Math.floor(Math.random() * (max - min) +1);
    duplicate = stakes.find(e => e == uniqueRandom);
    !duplicate ? stakes[i] = uniqueRandom : '';
  } while (duplicate);
}

console.log(`Unique stakes = ${stakes}`);

let matches = 0;
stakes.forEach(e => {
  if (numbers.includes(e)) matches++;
});

console.log(`matches = ${matches}`);

switch (matches) {
  case 0:
    console.log('no matches');
    break;
  case 1:
    console.log('just one...');
    break;
  case 2:
    console.log('Ambo!');
    break;
  case 3:
    console.log('Terna!');
    break;
  case 4:
    console.log('Quaterna!!!');
    break;
  case 5:
    console.log('CINQUINA!!!');
    break;
  case nElements:
    console.log('TOMBOLAAAAAAAAAA!!!!');
    break;
  default:
    console.log('default???');
    break;
}