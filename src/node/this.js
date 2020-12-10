console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports);
  console.log(this === module.exports);
  console.log(this === global);
  // NUNCA ESQUECER QUE DENTRO DE UM FUNÇÃO O
  // THIS FAZ REFERÊNCIA AO OBJETO GLOBAL, OU
  // SEJA O EXEMPLO ABAIXO É PERIGOSO:
  // this.perigo = '...' -> Adicionando ao objeto global
}

this.perigo = "..."; // -> Adicionando ao módulo
logThis();
