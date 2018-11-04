var nom = prompt("Comment tu t'appelles ?");

while(nom.length < 1 || nom.length > 10){
    var nom = prompt("Comment tu t'appelles ?");
}

console.log("Bonjour " + nom + " !");



