/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

const menu = [
  '1. Tiramisù',
  '2. Torta della nonna',
  '3. Cheesecake alla nutella',
  '4. Macedonia'
]

menu.forEach(item => console.log(item));
let choise = prompt('Fai la tua scelta');
switch (choise) {
  case '1':
    console.log('Tiramisù');
    break;
  case '2':
    console.log('Torta della nonna');
    break;
  case '3':
    console.log('Cheesecake alla nutella');
    break;
  case '4':
    console.log('Macedonia');
    break;
  default:
    console.log('Scelta non valida');
    break;
}
console.log(choise);