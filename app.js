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

function verificarChute() {
    console.log ("O botao foi clicado");
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() *10 +1)
}