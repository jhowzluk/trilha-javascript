class Animal {
  constructor(nome, som) {
    this.nome = nome;
    this.som = som;
  }

  falar() {
    console.log(`${this.nome} faz: ${this.som}`);
  }
}

const cachorro = new Animal('Cachorro', 'Au au');
const gato = new Animal('Gato', 'Miau');

cachorro.falar(); 
gato.falar();  