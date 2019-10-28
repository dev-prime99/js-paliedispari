
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
    document.getElementById('user').innerHTML = nu;
  } else{
    ok = 0;
    alert("Inserisci un numero compreso tra 1 e 5");
  }
}

npc = Math.floor(Math.random() * 5) + 1;
console.log(npc);
document.getElementById('cpu').innerHTML = npc;

somma = nu + npc;

if (somma % 2 == 0 && pod == "pari"){
  console.log("vinto");
  document.getElementById('risultato').innerHTML = "Hai vinto";
} else if (somma%2==1 && pod == "dispari"){
  document.getElementById('risultato').innerHTML = "Hai vinto";
  console.log("vinto1");
} else{
  document.getElementById('risultato').innerHTML = "Hai perso";
  console.log("perso");
}
