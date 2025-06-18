//Exercício 1 e 2
let carro = {
    marca: "Nissan",
    modelo: "S14 Kouki",
    ano: 1996
};

console.log("Modelo: " + carro.modelo);

carro.cor = "Preto";
carro.ano = 1998;

console.log(carro);

//Exercício 3 e 4
let num1 =  parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

let calculadora = {
    calculaSoma: function(num1, num2) {
        console.log("Resultado da soma: " + (num1 + num2));
    },
    calculaSubtracao: function(num1, num2) {
        console.log("Resultado da subtração: " + (num1 - num2));
    },
    calculaMultiplicacao: function(num1, num2) {
        console.log("Resultado da multiplicação: " + (num1 * num2));
    },
    calculaDivisao: function(num1, num2) {
        console.log("Resultado da divisão: " + (num1 / num2));
    }
};

calculadora.calculaSoma(num1,num2);

for(let chave in calculadora) {
    console.log(`${chave}: ${calculadora[chave]}`);
}

//Exercício 5 e 6
let livro1 = {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu"
};

let livro2 = livro1;
livro2.titulo = "Rios Infinitos";

console.log(`Título Livro 1: ${livro1.titulo}`);
console.log(`Título Livro 2: ${livro2.titulo}`);
console.log(Object.keys(livro1));
console.log(Object.values(livro1));