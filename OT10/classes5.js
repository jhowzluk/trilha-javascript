class Jogo {
  static adivinharNumero(palpiteDoUsuario, numeroMaximo = 10) {
    const numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(`Seu palpite: ${palpiteDoUsuario}. Número secreto: ${numeroSecreto}.`);

    if (palpiteDoUsuario === numeroSecreto) {
      return "Parabéns, você acertou!";
    } else {
      return "Que pena, você errou. Tente novamente!";
    }
  }
}

const palpite = 5;
const resultado = Jogo.adivinharNumero(palpite);
console.log(resultado);