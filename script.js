/*
//camadas da atmosfera
const readline = require('readline');

function solucao(altitude) {
  if (altitude <= 20) {
    return "TROPOSFERA";
  } else if (altitude <= 50) {
    return "ESTRATOSFERA";
  } else if (altitude <= 80) {
    return "MESOSFERA";
  } else if (altitude <= 450) {
    return "TERMOSFERA";
  } else {
    return "EXOSFERA";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a altitude em quilômetros: ', (altitude) => {
  const camada = solucao(Number(altitude));
  console.log(`A nave está na camada: ${camada}`);
  rl.close();
});*/


/*
//presa ou predador
const readline = require('readline');

function verificarAnimal(olhosNasLaterais) {
  if (olhosNasLaterais) {
    return "PRESA";
  } else {
    return "PREDADOR";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('O animal tem olhos nas laterais da cabeça? (true/false): ', (resposta) => {
  const olhosNasLaterais = resposta.toLowerCase() === 'true';
  const animal = verificarAnimal(olhosNasLaterais);
  console.log(`O animal é: ${animal}`);
  rl.close();
});*/


/*
// luta entre categorias
const readline = require('readline');

function verificarLuta(peso1, peso2) {
 
if(peso1 <55 && peso2 <55){
    return "PODEM LUTAR"
}

 if(peso1 >=55 && peso1 <65 && peso2 >=55 && peso2 <65){
    return "PODEM LUTAR"
}
if(peso1 >=65 && peso1 <75 && peso2 >=65 && peso2 <75){
    return "PODEM LUTAR"
}

if(peso1 >=75 && peso1 <85 && peso2 >=75 && peso2 <85){
    return "PODEM LUTAR"
}

if(peso1 >85 && peso2 >85){
    return "PODEM LUTAR"
}

else{
    return "NAO PODEM LUTAR"
}




}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o peso do lutador 1: ', (peso1) => {
  rl.question('Digite o peso do lutador 2: ', (peso2) => {
    const resultado = verificarLuta(Number(peso1), Number(peso2));
    console.log(`Os lutadores ${resultado}`);
    rl.close();
  });
});
*/



/*

//luta por diferenca de peso
const readline = require('readline');

function solucao(pesos) {
  const diferenca = Math.abs(pesos[0] - pesos[1]);

  if (diferenca <= 5) {
    return "PODEM LUTAR";
  } else {
    return "NAO PODEM LUTAR";
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o peso do Lutador A: ', (pesoA) => {
  rl.question('Digite o peso do Lutador B: ', (pesoB) => {
    const pesos = [Number(pesoA), Number(pesoB)];
    const resultado = solucao(pesos);
    console.log(`Resultado: ${resultado}`);
    rl.close();
  });
});
*/
  