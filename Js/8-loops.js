console.log(`\n Trabanhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Sorriso";


console.log("\n Destinos possíveis:");
// console.log(salvador, saPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}