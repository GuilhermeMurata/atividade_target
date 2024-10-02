function contarLetrasA(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
        contador++;
        }
    }
    return contador;
    }

  // Exemplo de uso:
    let texto = "Olá, tudo bem? Vamos aprender JavaScript!";
    console.log("A letra 'a' aparece", contarLetrasA(texto), "vezes.");