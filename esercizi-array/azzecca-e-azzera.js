/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numbers interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

// config
const min = 1;
const max = 50;
const nElements = 50;
let numbers = new Array(nElements);
let choise = '';
let zeroStop = 0;

// build Array(100) with random values between max and min
for(i=0 ; i<numbers.length ; i++) numbers[i] = Math.floor(Math.random() * (max - min) +1);
console.log('numbers = ' + numbers);

// getting user's choises until 0 choosen or every elements changed to 0
do {
  zeroStop = 0
  choise = prompt('Choose a value:');

  // array parsing with user's choise
  numbers.forEach(function(e,i,a) {
    if (e%choise == 0 ) {
      a[i] = 0;
      zeroStop++;
    }
  });
  console.log(`numbers after = ${numbers}`);
} while( (choise != 0) && (zeroStop != numbers.length) );

if (zeroStop == numbers.length) console.log(`${zeroStop} elements changed on ${numbers.length}`);