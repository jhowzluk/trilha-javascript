//Exercício 1
for(i = 0; i <= 10; i++) {
    console.log(i);
}

//Exercício 2
for(i = 0; i <= 20; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

//Exercício 3
let num = 0;

while(num <= 10) {
    console.log(num);
    num++;
}

//Exercício 4
for(i = 0; i <= 100; i++) {
    if(i == 50) {
        break;
    }

    console.log(i);
}

//Exercício 5
for(i = 0; i <= 20; i++) {
    if(i == 13) {
        continue;
    }

    console.log(i);
}

//Exercício 6
let nomes = ["Jhonatan", "Luis", "Maria"];

for(let nome of nomes) {
    console.log(nome);
}