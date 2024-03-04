function järjestäNumerot() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var järjestetytNumerot = [numero1, numero2, numero3].sort(function(a, b){return a - b});

    document.getElementById("järjestä").innerHTML = "Järjestetyt numerot: " + järjestetytNumerot.join(", ");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("etsi").addEventListener("click", function() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);

    var suurinNumero = Math.max(n1, n2, n3, n4, n5);
    
    document.getElementById("numero").innerText = "Suurin numero on: " + suurinNumero;
    });
});

function tarkistaLuku() {
    var luku = parseFloat(document.getElementById("luku").value);
    var tulos = document.getElementById("tulos");

    if (luku % 2 === 0) {
        tulos.innerText = luku + ": Luku on parillinen.";
    }
    else {
        tulos.innerText = luku + ": Luku ei ole parillinen.";
    }
}

function tarkistaIkä() {
    var ikä = parseInt(document.getElementById("ikä").value);
    var annettuikä = document.getElementById("ajoOikeus");

    if (ikä >= 18) {
        annettuikä.innerText = "Saat ajaa polkupyörällä, mopolla ja autolla.";
    }
    else if (ikä >= 15) {
        annettuikä.innerText = "Saat ajaa polkupyörällä ja mopolla";
    }
    else {
        annettuikä.innerText = "Saat ajaa vain polkupyörällä";
    }
}

function käännäLause() {
    var valittuKieli = document.getElementById("kieli").value;
    var valinta = document.getElementById("käännös");

    var lause = "Hei maailma!";

    switch (valittuKieli) {
        case "Englanti":
            valinta.innerText = "Hello world!";
            break;
        case "Saksa":
            valinta.innerText = "Hallo welt!";
            break;
        case "Ruotsi":
            valinta.innerText = "Hej världen!";
            break;
    }
} 