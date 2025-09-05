class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}
const hero1 = new hero("Goku", 30, "Saiyajin");
const hero2 = new hero("Naruto", 25, "Ninja");
const hero3 = new hero("Luffy", 20, "Pirata");

function ataque(hero) {
    let poder = ["Kamehameha", "Rasengan", "Gomu Gomu no Pistol"];
    if (hero.tipo === "Saiyajin") {
        poder = poder[0];
    } else if (hero.tipo === "Ninja") {
        poder = poder[1];
    } else {
        poder = poder[2];
    }

    console.log("O " + hero.tipo + " atacou usando o " + poder);
}
ataque(hero1);
ataque(hero2);
ataque(hero3);
