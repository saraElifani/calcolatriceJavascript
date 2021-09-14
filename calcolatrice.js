
var a = 60;
var b = 5;

function main() {
    console.log(divisione(a, b) + "\n" + somma(a, b) + "\n" + sottrazione(a, b) + "\n" + moltiplicazione(a, b));
}


function somma(a, b) {
    return ("Il risultato della somma: ") + (a + b);
}

function sottrazione(a, b) {
    return ("Il risultato della sottrazione: ") + (a - b);
}

function moltiplicazione(a, b) {
    return ("Il risultato della moltiplicazione: ") + (a * b);
}

function divisione(a, b) {
    if (b != 0) {
        return ("Il risultato della divisione: ") + (a / b);
    } else {
        console.log("Non e' possibile dividere per zero")
    }
}

//per richiamare metodo main 
if (require.main === module) {
    main();
}
