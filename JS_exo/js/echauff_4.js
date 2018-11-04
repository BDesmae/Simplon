var nb1 = Math.floor(Math.random() * 11);
var nb2 = Math.floor(Math.random() * 11);
var chars = "+-*";
random = chars.charAt(Math.floor(Math.random() * chars.length));

var true_result = eval(nb1 + random + nb2);

var resultat = Number(prompt("Que font " + nb1 + random + nb2));

while (resultat !== true_result){
    var resultat = Number(prompt("Que font " + nb1 + random + nb2));
}