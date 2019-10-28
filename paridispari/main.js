
var pod, nu, npc, somma, ok;

ok = 0;

while (ok < 1){
  pod = prompt("Pari o dispari").toLowerCase();
  if (pod != "pari" && pod != "dispari"){
    ok = 0;
    alert("Inserisci pari o dispari, non altre parole");
  } else{
    ok = 1;
  }
  console.log(pod);
}

ok = 0;

while (ok < 1){
  nu = parseInt(prompt("Inserisci un numero da 1 a 5"));
  if (nu > 0 && nu < 6){
    ok = 1;
  } else{
    ok = 0;
    alert("Inserisci un numero compreso tra 1 e 5");
  }
}

npc = Math.floor(Math.random() * 5) + 1;
console.log(npc);

somma = nu + npc;

if (somma % 2 == 0 && pod == "pari"){
  console.log("vinto");
} else if (somma%2==1 && pod == "dispari"){
  console.log("vinto1");
} else{
  console.log("perso");
}
