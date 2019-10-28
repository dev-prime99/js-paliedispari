
var pod, nu, npc, somma;

pod = prompt("Pari o dispari").toLowerCase();

nu = parseInt(prompt("Inserisci un numero da 1 a 5"));

npc = Math.floor(Math.random() * 5) + 1;
console.log(npc);

somma = nu + npc;

if (nu > 5){
  location.reload();
} else if(pod != "pari" || pod != "dispari"){
  location.reload();
} else if (somma%2==0 && pod == "pari"){
  console.log("vinto");
} else if (somma%2==1 && pod == "dispari"){
  console.log("vinto1");
} else{
  console.log("perso");
}
