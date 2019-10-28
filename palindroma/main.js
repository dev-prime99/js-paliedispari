
var parola, contrario;

parola = prompt("Inserisci una parola").toLowerCase();

contrario = parola.split('').reverse().join("");
//console.log(contrario);

if (parola == contrario){
  console.log(true);
} else{
  console.log(false);
}
