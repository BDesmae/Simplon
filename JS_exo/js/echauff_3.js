var user = prompt("Quel est votre nom d'utilisateur ? Il doit posséder plus de 4 caractères ainsi que le format email@gmail.com");


for (i = 0 ; i < user.length ; i++){
    if (user[i] === "@"){
        if (user.length >= 4){
            if (user === "lea@gmail.com"){
                var mdp = prompt("Mot de passe");
                while (mdp !== "12345"){
                    mdp = prompt("Mauvais mot de passe, réessayez");
                }
            }else{console.log("mauvais utilisateur")}
        }else{console.log("Il faut plus de 5 caractères")}
    }else{console.log("L'utilisateur ne contient pas de @");}     
}
console.log(user);
console.log(mdp);
