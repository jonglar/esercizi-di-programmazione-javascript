/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
console.log('*** Quanti anni ha? ***');
console.log('anno corrente = 2021, anno di nascita = 1988');
let currentYear = 2021;
let birthYear = 1988;
let howOld = currentYear-birthYear;
let yearsTo = 100;
console.log('Età attuale = ' + howOld);
console.log('Anni mancati a ' + yearsTo + ' = ' + (yearsTo-howOld));
console.log('*** Quanti anni ha? ***');
console.log('');