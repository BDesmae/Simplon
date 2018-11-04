console.log("Bienvenue dans ce jeu de devinette !");

var min = Number(prompt("Quel est le nombre minimum ?"));
var max = Number(prompt("Quel est le nombre maximum ?"));
function nbRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

var compteur = Number(prompt("Combien de chance pour trouver le nombre ?"));

var solution = Math.floor(nbRandom(min, max));

var nombre = "";

while (nombre !== solution){
    nombre = Number(prompt("Quel est le nombre mystère ?"));
    if (solution < nombre && nombre <= max){
        console.log(nombre + " est trop grand");
    }
    if (solution > nombre && nombre >= min){
        console.log(nombre + " est trop petit");
    }
    if (solution < nombre && nombre > max){
        console.log(nombre + " est plus grand que l'intervalle voulu");
    }
    if (solution > nombre && nombre < min){
        console.log(nombre + " est plus petit que l'intervalle voulu");
    }
    compteur--;
    if (compteur === 0 && nombre !== solution){
        console.log("Vous avez perdu ! La solution était " + solution);
        break;
    }
}
if (nombre === solution){
    console.log("Bravo ! " + nombre + " est la solution !");
}




