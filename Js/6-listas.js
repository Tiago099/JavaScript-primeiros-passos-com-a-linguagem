console.log(`Trabanhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log("Desinos possíveis:");
// console.log(salvador, saPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);  // deletando item na lista 
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);  //selecionando item da lista 