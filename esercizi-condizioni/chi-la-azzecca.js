/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/
let player1 = Math.floor(Math.random() * (100-1) + 1);
let player2 = Math.floor(Math.random() * (100-1) + 1);
let dice = Math.floor(Math.random() * (100-1) + 1);
console.log(`player1 = ${player1}`);
console.log(`player2 = ${player2}`);
console.log(`dice = ${dice}`);

let match = 'not match';
let nearest = '';
switch(dice) {
  case player1:
    match = 'player1';
    break;
  case player2:
    match = 'player2';
    break;
  default:
    match = 'nobody';
    if (Math.abs(dice-player1) < Math.abs(dice-player2)) {
      nearest = 'player1';
    } else {
      nearest = 'player2';
    }
}

if (match == 'nobody') {
  console.log(`${match} matched number! but ${nearest} is the nearest!`);
} else {
  console.log(`WOW! ${match} matched the number!`);
}