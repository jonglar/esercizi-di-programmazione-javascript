/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
const temps = [10, -2, 31, 201, -202, 22, 15, -6, 7, 124, 4, 76, -52, -22, -154, 55, -85, 8];
let hottest = 0;
let coldest = 0;
for (let i=0; i<temps.length-1; i++) {
  if (temps[i]>hottest) {
    hottest = temps[i];
  } 
  if (temps[i]<coldest) {
    coldest = temps[i];
  }
}
console.log(temps);
console.log(`hottest = ${hottest}, coldest = ${coldest}`);