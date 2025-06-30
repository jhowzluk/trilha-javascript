class Utilitario {
  static numeroAleatorio() {
    return Math.random();
  }

  static celsiusParaFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C é igual a ${fahrenheit.toFixed(1)}°F.`;
  }
}

console.log(Utilitario.celsiusParaFahrenheit(25));
console.log(Utilitario.celsiusParaFahrenheit(0)); 