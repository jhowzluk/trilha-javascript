const infoBasicas = {
  titulo: 'Interestelar',
  diretor: 'Christopher Nolan'
};

const infoComplementares = {
  ano: 2014,
  genero: 'Ficção Científica'
};

const filmeCompleto = { ...infoBasicas, ...infoComplementares };

console.log(filmeCompleto);