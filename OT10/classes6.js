class ContaBancaria {
  #saldo; 

  constructor(saldoInicial) {
    if (saldoInicial < 0) {
      this.#saldo = 0;
    } else {
      this.#saldo = saldoInicial;
    }
  }


  getSaldo() {
    return `Seu saldo atual é de R$ ${this.#saldo.toFixed(2)}`;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacar(valor) {
    if (valor <= 0) {
        console.log("O valor do saque deve ser positivo.");
        return;
    }
    
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Saldo restante: R$ ${this.#saldo.toFixed(2)}`);
    }
  }
}

const minhaConta = new ContaBancaria(1000);
console.log(minhaConta.getSaldo()); 

minhaConta.sacar(500);  
minhaConta.sacar(600);
minhaConta.sacar(-100); 
console.log(minhaConta.getSaldo());