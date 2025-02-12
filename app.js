/*  ---AULA DE FUNCOES, ESSE É O ANTIGO CODIGO, ANTES DE ADAPTAR ISSO TUDO PARA FUNÇÃO---

let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do Numero Secreto";

let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
*/
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector();
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

// FUNCAO SEM PARAMETRO E SEM RETORNO
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() *10 +1)
}