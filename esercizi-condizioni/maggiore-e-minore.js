/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/
const a = -5;
const b = 8;
const c = 4;
const d = -2;

let major = 0;
let minor = 0;

if (a>b) {
  major = a;
  minor = b;
} else {
  major = b;
  minor = a;
}

if (c>major) {major=c};
if (d>major) {major=d};
if (c<minor) {minor=c};
if (d<minor) {minor=d};

console.log(`Major = ${major}, Minor = ${minor}`);