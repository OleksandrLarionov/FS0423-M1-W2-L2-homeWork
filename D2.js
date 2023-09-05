/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [5, 30, 50, 60, 88, 2, 4 ,7] //vanno i numeri interi
function compareNumbers(a, b) {
  return a - b
}
numbers.sort(compareNumbers) //numeri vengono ordinati
console.log(numbers)
console.log(numbers[7]) // qui viene mostrato il più grande dei numeri interi



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const wholeNumber = 5
let yourNumber = 7 
if(wholeNumber !== yourNumber) {
  console.log ('Il numero fotnito è diverso da 5')
} else {
  console.log ('Esatto il tuo numero è ', wholeNumber)
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */
const x = 25  // inserisci il numero
if(x % 5 === 0) {
  console.log('divisibile per 5')

}




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const wholeNumber1 = 3
const wholeNumber2 = 5

if (wholeNumber1 === 8 || wholeNumber2 === 8) {
  console.log('bravo')
} else if(wholeNumber1 - wholeNumber2 === 8 || wholeNumber1 + wholeNumber2 === 8) {
  console.log('vero')
} else {
  console.log('false')
}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const totalShoppingCart = 50
const shippingFeels = 10
let checkout = ''
if (totalShoppingCart >= 50 ) {
  checkout = totalShoppingCart + 0
  console.log('free shipping applied', 'Total Ammount:', checkout,' euro')

} else {
  checkout = totalShoppingCart + shippingFeels
  console.log('shipping feels price 10 euro', 'Total Ammount:', checkout,' euro')
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart1 = 100
const shippingFeels1 = 10
const blackFriday = totalShoppingCart1 * 20 / 100  // percentuale di sconto
const total = totalShoppingCart1 - blackFriday
let checkout1 = ''
if (total >= 50 ) {
  checkout1 = total + 0
  console.log('free shipping applied', 'Total Ammount:', checkout1,' euro')

} else {
  checkout1 = total + shippingFeels
  console.log('shipping feels price 10 euro', 'Total Ammount:', checkout1,' euro')
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 3
let number2 = 2
let number3 = 1

if((number1 > number2) && (number1 > number3)  && (number2 > number3)) {
  console.log(number1, number2, number3)
} else if ((number2 > number1) && (number2 > number3) && (number1 > number3)) {
  onsole.log(number2, number1, number3)
} else if ((number1 < number2) && (number1 < number3) && (number2 > number3)) {
  console.log(number2, number3, number1)
} else if ((number2 < number1) && (number2 < number3)  && (number3 > number1)) {
  console.log(number3, number1, number2)
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valorX = 5 //si cambia il valore con numero / 'Testo'
console.log(typeof valorX)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberOne = 2


if (numberOne % 2 === 0) {
  console.log('Il tuo numero è pari')
} else if (numberOne % 2 !== 0) {
  console.log('Il tuo numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto",
}

console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills [2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = []

array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array1.splice(9, 1, 100)

console.log (array1)