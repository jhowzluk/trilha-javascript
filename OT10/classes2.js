class Veiculo {
  constructor(marca, modelo, velocidadeMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeMaxima = velocidadeMaxima;
  }

  descrever() {
    console.log(`Veículo: ${this.marca} ${this.modelo} | Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
  }
}

const carro = new Veiculo('Toyota', 'Corolla', 220);
const moto = new Veiculo('Honda', 'CB 500', 180);

carro.descrever();
moto.descrever();