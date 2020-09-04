// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var arrayCasuali = [];

function generaCasuali(min, max) {
  var numeroCasuale = Math.floor(Math.random() * (max - min)) + min;
  return numeroCasuale;
}

var contatore = 0;
while(contatore < 5){
  var numeroFunzione = generaCasuali(1, 100);
  if(!arrayCasuali.includes(numeroFunzione)){
    arrayCasuali.push(numeroFunzione);
    contatore++;
  }
}

alert(arrayCasuali);

var arrayUtente = [];
var numeriIndovinati = 0;
var maxRange = 100;
var minRange = 1;

setTimeout(function(){
  var contatore1 = 1;
  while(contatore1 <= 5){
    var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 100"));
    if(numeroUtente < minRange || numeroUtente > maxRange){
      alert("Attenzione hai inserito un numero fuori range");
    } else{
        if(!arrayUtente.includes(numeroUtente)){
          if(arrayCasuali.includes(numeroUtente)){
            numeriIndovinati++;
            arrayUtente.push(numeroUtente);
          }
        }else {
          contatore1--;
          alert("Hai inserito già questo numero");
        }
        contatore1++;
      }
  }

  console.log("I numeri indovinati sono: " + numeriIndovinati);
  console.log("Questi sono i numeri che hai indovinato: " + arrayUtente);

}, 30000);
