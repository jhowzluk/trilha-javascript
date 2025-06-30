let frutas = new Set('Maçã', 'Laranja', 'Ameixa');

frutas.add('Ameixa');

frutas.has('Maçã');

frutas.delete('Laranja');

frutas.clear();

let numeros = new Set(1, 2, 3, 3, 1);

console.log(numeros.size());

for(let valor of numeros) {
    console.log(valor);
}

let numerosUnicos = new Set(numeros);
console.log([...numerosUnicos]);