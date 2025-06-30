class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, curso, notas) {
    super(nome, idade); 
    this.curso = curso;
    this.notas = notas; 
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }
    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / this.notas.length;
    return media.toFixed(2); 
  }

  apresentar() {
      console.log(`Sou ${this.nome}, tenho ${this.idade} anos, curso ${this.curso} e minha média é ${this.calcularMedia()}.`);
  }
}

const ana = new Estudante('Ana', 21, 'Engenharia de Software', [8, 9.5, 7, 10]);
ana.apresentar();