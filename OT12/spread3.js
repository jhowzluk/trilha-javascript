function criarListaDeConvidados(...convidados) {
  console.log('--- Lista de Convidados para a Festa ---');
  if (convidados.length === 0) {
    console.log('Nenhum convidado foi adicionado ainda.');
    return;
  }
  
  convidados.forEach((nome, index) => {
    console.log(`${index + 1}. ${nome}`);
  });
}

criarListaDeConvidados('Ana', 'Beto', 'Carla', 'Daniel');
console.log('\n--- Outra Festa ---');
criarListaDeConvidados('Lucas', 'Júlia');