/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
console.log('*** Conta il tempo ***');
let input = 36100;
console.log('Secondi = ' + input);
let secs = input % 60;
let mins = (input - secs) / 60;
let hours = (mins - (mins % 60)) / 60;
console.log('Ore = ' + hours + ', Minuti = ' + mins + ', Secondi = ' + secs);
console.log('*** Conta il tempo ***');
console.log('');
console.log('*** esempio TypeScript (ALT+96) ***');
console.log(` Ore = ${hours}, Minuti = ${mins}, Secondi = ${secs} `);
console.log('*** esempio TypeScript (ALT+96) ***');
console.log('');