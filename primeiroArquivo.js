const primeiroNumero = 1;
const segundoNumero = 4;
const soma = primeiroNumero + segundoNumero;

console.log(soma)

/*---------------------------------------------------------------------------*/

function verificaNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}

/*----------------------------------------------------------------------------*/

let minhaString = "Esta é uma string de exemplo";

console.log("Comprimento da string:", minhaString.length);

let stringMaiuscula = minhaString.toUpperCase();
console.log("String em letras maiúsculas:", stringMaiuscula);

let palavras = minhaString.split(" ");

console.log("Palavras da string:");
palavras.forEach(palavra => {
    console.log(palavra);
});