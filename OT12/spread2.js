const usuario = {
  nome: 'Mariana Silva',
  email: 'mariana.silva@example.com'
};

const usuarioAtualizado = {
  ...usuario,
  status: 'ativo'
};

console.log('Objeto Original:', usuario);
console.log('Objeto Atualizado:', usuarioAtualizado);