//Exercício 1
let largura = parseInt(prompt("Digite a largura (m2): "));
let altura = parseInt(prompt("Digite a altura (m2): "));

function calculaArea(largura, altura) {
    return largura * altura;
}

console.log("Área do retângulo: " + calculaArea(largura, altura) + "m2");

// //Exercício 2
let num = parseInt(prompt("Digite um número: "));

function verificaPar(num) {
    if(num % 2 == 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log("O número digitado é: " + verificaPar(num));

//Exercício 3
let polegadas = parseInt(prompt("Digite o valor em polegadas: "));

function calculaCentimetros(polegadas) {
    return polegadas * 2.54;
}

console.log("O valor em centímetros é: " + calculaCentimetros(polegadas) + "cm");

//Exercício 4
let peso = parseInt(prompt("Digite o peso (kg): "));
let alturacm = parseInt(prompt("Digite a altura (cm): "));

function calculaIMC(peso, altura) {
    return peso / (altura / 100) ** 2;
}

let icimcCalculado = calculaIMC(peso, alturacm);

console.log("Seu IMC é: " + icimcCalculado.toFixed(2));

//Exercício 5
let fraseMaiscula = prompt("Digite uma frase: ");

function converteParaMinusculo(frase) {
    return frase.toLowerCase();
}

console.log("Frase digitada em minúscula: " + converteParaMinusculo(fraseMaiscula));

//Exercício 6
let numUser = parseInt(prompt("Digite um número: "));
let multiplicaPorDez = (a) => a * 10;

console.log("O número digitado multiplicado por dez é: " + multiplicaPorDez(numUser));