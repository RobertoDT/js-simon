// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var arrayCasuali = [];

function generaCasuali() {
  var numeroCasuale = Math.floor(Math.random() * 10) +1;
  return numeroCasuale;
}

var contatore = 0;
while(contatore < 5){
  var numeroFunzione = generaCasuali();
  if(!arrayCasuali.includes(numeroFunzione)){
    arrayCasuali.push(numeroFunzione);
    contatore++;
  }
}

alert(arrayCasuali);

var arrayUtente = [];
var numeriIndovinati = 0;


setTimeout(function(){
  var contatore1 = 1;
  while(contatore1 <= 5){
    var numeroUtente = parseInt(prompt("inserisci un numero"));
    if(!arrayUtente.includes(numeroUtente)){
      if(arrayCasuali.includes(numeroUtente)){
        numeriIndovinati++;
        arrayUtente.push(numeroUtente);
      }
    }
    contatore1++;
  }

  console.log("I numeri indovinati sono: " + numeriIndovinati);
  console.log("Questi sono i numeri che hai indovinato: " + arrayUtente);

}, 3000);
