function criarMenu(entradas, pratosPrincipais, sobremesas) {
  const menuCompleto = [
    '--- Entradas ---',
    ...entradas,
    '--- Pratos Principais ---',
    ...pratosPrincipais,
    '--- Sobremesas ---',
    ...sobremesas
  ];
  return menuCompleto;
}

const minhasEntradas = ['Bruschetta', 'Salada Caprese'];
const meusPratos = ['Lasanha Bolonhesa', 'Risoto de Cogumelos'];
const minhasSobremesas = ['Tiramisu', 'Panna Cotta'];

const menuDoDia = criarMenu(minhasEntradas, meusPratos, minhasSobremesas);

menuDoDia.forEach(item => console.log(item));