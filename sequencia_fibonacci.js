function pertenceFibonacci(num) {
    let a = 0, b = 1, c;
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }
    return c === num ? "Pertence à sequência de Fibonacci" : "Não pertence à sequência de Fibonacci";
    }

  // Exemplo de uso:
    let numero = 21;
    console.log(pertenceFibonacci(numero));