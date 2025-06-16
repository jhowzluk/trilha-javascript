// //Exercício 1
let idade = parseInt(prompt("Digite sua idade: "));

if(idade > 0 && idade < 13) {
    console.log("É criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("É adolescente.");
} else if (idade >= 18 && idade <= 64) {
    console.log("É adulto.");
} else if (idade >= 65) {
    console.log("É idoso.");
} else {
    console.log("Idade inválida.")
}

//Exercício 2
let num = 4;
let numUser = parseInt(prompt("Digite um número entre 1 e 5: "));

switch(numUser) {
    case 4:
        console.log("Acertou!");
        break;
    default:
        if (numUser >= 1 && numUser <= 5) {
            console.log("Errou!");
        } else {
            console.log("Número inválido.");
        }
}

//Exercício 3
let nota = parseInt(prompt("Digite uma nota: "));

switch(true) {
    case nota >= 0 && nota < 6:
        console.log("Reprovado.");
        break;
    case nota >= 6 && nota <= 7:
        console.log("Recuperação.");
        break;
    case nota >= 8 && nota <= 10:
        console.log("Aprovado.");
        break;
    default:
        console.log("Nota inválida.");

}