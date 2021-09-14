
let a = prompt("Scrivi il primo numero");
let b = prompt("Scrivi il secondo numero");
let operazione = prompt("Quale operazione vuoi esegiure? somma, sottrazione, moltiplicazione, divisione");

function somma(a, b) {
    return ("Il risultato della somma: ") + (parseInt(a) + parseInt(b));
}

function sottrazione(a, b) {
    return ("Il risultato della sottrazione: ") + (parseInt(a) - parseInt(b));
}

function moltiplicazione(a, b) {
    return ("Il risultato della moltiplicazione: ") + (parseInt(a) * parseInt(b));
}

function divisione(a, b) {
    if (b == 0) {
        console.log("Non e' possibile dividere per zero");
    } else {
        return ("Il risultato della divisione: ") + (parseInt(a) / parseInt(b));
    }
}

switch (operazione) {
    case "somma":
        console.log(somma(a, b));
        break;
    case "sottrazione":
        console.log(sottrazione(a, b));
        break;
    case "moltiplicazione":
        console.log(moltiplicazione(a, b));
        break;
    case "divisione":
        console.log(divisione(a, b));
        break;
}






/*
//per richiamare metodo main
if (require.main === module) {
    main();
}
*/