/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/
const min = 1;
const max = 100;

// build Array(100) with random values between max and min
let numeri = new Array(max);
for(i=0;i<max;i++) { numeri[i] = ''; }
numeri.map((el,i,arr) => arr[i] = Math.floor(Math.random() * (max - min) +1));
console.log('numeri = ' + numeri);

// user's choise
let exit = false;
do {
  let choise = prompt('Choose a value:');
  switch (choise) {
    case ('1'):
      numeri.filter( e => e == choise ).forEach( (e,i,arr) => numeri[i]=0 );
      console.log('caso eseguito');
      console.log(numeri);
      break;
    case ('-1'):
      exit = true;
      console.log('Exit request');
      break;
    default:
      console.log('Invalid choise');
      break;
  }
} while(!exit);

console.log(numeri);