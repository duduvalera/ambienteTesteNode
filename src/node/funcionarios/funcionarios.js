const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const somenteChineses = (pessoa) => pessoa.pais === "China";
const somenteMulheres = (pessoa) => pessoa.genero === "F";
const menorSalario = (salarioA, salarioB) => {
  return salarioA.salario - salarioB.salario;
};
const menorSalario2 = (salarioA, salarioB) => {
  return salarioA.salario < salarioB.salario ? salarioA : salarioB;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  //console.log(funcionarios)

  // mulher chinesa com o menor salário?
  console.log(
    funcionarios
      .filter(somenteChineses)
      .filter(somenteMulheres)
      //.sort(menorSalario)[0]
      .reduce(menorSalario2)
  );
});
