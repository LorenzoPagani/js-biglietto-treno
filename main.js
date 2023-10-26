/* prompt età e chilometri */

const chilometri = parseInt(prompt("Quanti chilometri devi percorrere?", "100"));
const eta = parseInt(prompt("quanti anni hai?", "18"));

/* controllo validità input */

if(isNaN(chilometri) || isNaN(eta)) {
    console.log("che cazzo hai scritto?");
    document.getElementById("my_age").innerHTML = " input non valido";
    document.getElementById("my_km").innerHTML = " input non valido";
}

else { console.log(`devi percorrere ${chilometri} chilometri e hai ${eta} anni`);
document.getElementById("my_age").innerHTML = " " + eta + " anni";
document.getElementById("my_km").innerHTML = " " + chilometri + " Km";
}


/* prezzo base del biglietto */

const prezzoKm = chilometri * 0.21;
console.log("il costo base del biglietto è " + prezzoKm + " euro");


/* applicazione sconto */


let prezzoFinale = prezzoKm.toFixed(2);
let sconto = "%"

if (isNaN(chilometri)){
    console.log("ERRORE");
    document.getElementById("cost").innerHTML = "impossibile calcolare il prezzo";
}
else if (eta < 18) {
    prezzoFinale = prezzoKm.toFixed(2); - ((prezzoKm / 100) * 20)
    console.log("il prezzo finale è di " + prezzoFinale + " euro");
    document.getElementById("discount").innerHTML = " 20" + sconto;
    document.getElementById("cost").innerHTML = prezzoFinale + "€";
}

else if (eta >= 60) {
    prezzoFinale = prezzoKm.toFixed(2); - ((prezzoKm / 100) * 40);
    console.log("il prezzo finale è di " + prezzoFinale + " euro");
    document.getElementById("discount").innerHTML = " 40" + sconto;
    document.getElementById("cost").innerHTML = prezzoFinale + "€";
}

else if (eta >= 18 || eta >= 60) {
    document.getElementById("cost").innerHTML = prezzoFinale + "€";
}

else {
    console.log("ERRORE");
    document.getElementById("cost").innerHTML = "impossibile calcolare il prezzo";
}