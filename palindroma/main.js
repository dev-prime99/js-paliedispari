
var parola, contrario;

parola = prompt("Inserisci una parola").toLowerCase();

/*
contrario = parola.split('').reverse().join("");
//console.log(contrario);

if (parola == contrario){
  console.log(true);
} else{
  console.log(false);
}
*/

contrario = '';

for(var i = parola.length-1; i >= 0; i--){
    contrario += parola[i];
}
console.log(contrario);

if (parola == contrario){
  console.log(true);
  document.getElementById('risultato').innerHTML = "La parola " + parola + " è polindroma " + "(" + contrario + ")";
} else{
  console.log(false);
  document.getElementById('risultato').innerHTML = "La parola " + parola + " non è polindroma " + "(" + contrario + ")";
}
