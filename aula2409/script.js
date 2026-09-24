// 1. 
// const notas = [4, 7, 9, 2, 10];

// const aprovados = notas.filter(n => n >= 7);

// function dobro(aprovados) {
//     const resultados = aprovados.map (n => n * 2);
//     return resultados;
// }
// console.log(dobro(aprovados));

// Complete a função abaixo:
function somar(n1, n2) {
  return n1 + n2;
}

function executarOperacao(a, b, operacaoCallback) {
  // SEU CÓDIGO AQUI: chame operacaoCallback com os parâmetros a e b
  return operacaoCallback(a, b);
}

// Teste:
console.log(executarOperacao(10, 5, somar));