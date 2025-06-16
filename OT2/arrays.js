let animais = [];
let frutas = ["maçã", "goiaba", "tangerina", "ameixa"];
let numFrutas = frutas.length;

animais.push("elefante", "cervo", "gato");
animais.shift();
animais.unshift("onça", "zebra");
animais[1] = "girafa";

console.log(animais);
console.log("Número total de frutas: " + numFrutas);

for(i = 0; i < numFrutas; i++) {
    console.log(frutas[i]);
}