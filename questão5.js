let palavra = prompt("Informe a palavra:");
let palavraInvertida = "";

for (i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

alert(`${palavra} ao contrario fica ${palavraInvertida}`);
