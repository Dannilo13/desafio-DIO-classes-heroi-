let vitoria = 21;
let derrota = 10;
let nivelHeroi = ["iniciante", "ferro", "bronze", "prata", "ouro", "diamante", "lendario", "imortal"];

function rankear() {
    let ranking = vitoria - derrota;
    if (ranking === 0 || derrota > vitoria) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[0] + "!");
    } else if (ranking <= 10) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[1] + "!");
    } else if (ranking <= 20) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[2] + "!");
    } else if (ranking <= 50) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[3] + "!");
    } else if (ranking <= 80) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[4] + "!");
    } else if (ranking <= 90) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[5] + "!");
    } else if (ranking <= 100) {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[6] + "!");
    } else {
        console.log("O heroi tem o saldo de " + ranking + " vitorias, e está no nível " + nivelHeroi[7] + "!");
    }
}
rankear();