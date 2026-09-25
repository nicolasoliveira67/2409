// 1. 
// const notas = [4, 7, 9, 2, 10];


// const aprovados = notas.filter(n => n >= 7);

// function dobro(aprovados) {
//     const resultados = aprovados.map (n => n * 2);
//     return resultados;
// }
// console.log(dobro(aprovados));

// 2. // Complete a função abaixo:
// function somar(n1, n2) {
//   return n1 + n2;
// }

// function executarOperacao(a, b, operacaoCallback) {
// return operacaoCallback(a, b);
// }

// console.log(executarOperacao(10, 5, somar));


// 3.
// function formatarNome(nome) {
//   return "Aluno: " + nome;
// }

// function processarLista(lista, callback) {
//   for (let i = 0; i < lista.length; i++) {
//     console.log(callback(lista[i]));
//   }
// }

// const alunos = ["Ana", "Carlos", "Beatriz"];
// processarLista(alunos,formatarNome);

// 4.
// function baixarArquivo(nomeArquivo, callbackFinal) {
//   console.log("Iniciando download...");
  
//   setTimeout(() => {
// callbackFinal("Download concluido")
// }, 1000);
//   // SEU CÓDIGO AQUI: use setTimeout e chame callbackFinal após 1 segundo
// }

// baixarArquivo("aula1.pdf", function(mensagem) {
//   console.log("NOTIFICAÇÃO: " + mensagem);
// });

// 5.
function ePar(num) {
  return num % 2 === 0;
}

function filtrarNumeros(lista, callbackCondicao) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    // SEU CÓDIGO AQUI: teste callbackCondicao e adicione os itens aprovados
    
    if () {
        
    }
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6];
console.log(filtrarNumeros(numeros, ePar));
