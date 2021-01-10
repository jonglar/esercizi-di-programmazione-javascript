/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/
const a = 25;
const b = 59;
const op = [
  'somma',
  'sottrazione',
  'moltiplicazione',
  'divisione',
  'modulo',
  'potenza',
  'media'
];

for (let i=0; i<op.length; i++) {
  switch (op[i]) {
    case 'somma':
      console.log(`${op[i]}: ${a} + ${b} = ${a+b}`);
      break;
    case 'sottrazione':
      console.log(`${op[i]}: ${a} - ${b} = ${a-b}`);
      break;
    case 'moltiplicazione':
      console.log(`${op[i]}: ${a} * ${b} = ${a*b}`);
      break;
    case 'divisione':
      console.log(`${op[i]}: ${a} / ${b} = ${(a/b).toFixed(2)}`);
      break;
    case 'modulo':
      if (Number.isInteger(a) && Number.isInteger(b)) {
        console.log(`${op[i]}: ${a} % ${b} = ${a%b}`);
      } else {
        console.log('Numbers are not integers!');
      }
      break;
    case 'potenza':
      console.log(`${op[i]}: ${a} pot ${b} = ${Math.pow(a,b)}`);
      break;
    case 'media':
      console.log(`${op[i]}: (${a}+${b})/2 = ${(a+b)/2}`);
      break;
    default:
      console.log('Operation not permitted');
      break;
  }
}