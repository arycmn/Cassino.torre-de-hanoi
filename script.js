let torre1 = {
  posicao: document.getElementById("torre1"),
  contador: 0,
};
let torre2 = {
  posicao: document.getElementById("torre2"),
  contador: 0,
};
let torre3 = {
  posicao: document.getElementById("torre3"),
  contador: 0,
};
let disco1 = {
  tamanho: 1,
  posicao: document.getElementById("disco1"),
};
let disco2 = {
  tamanho: 2,
  posicao: document.getElementById("disco2"),
};
let disco3 = {
  tamanho: 3,
  posicao: document.getElementById("disco3"),
};
let disco4 = {
  tamanho: 4,
  posicao: document.getElementById("disco4"),
};

let ultimaPeca
let estagio

torre1.posicao.addEventListener("click", seletorDeEstagio);
torre2.posicao.addEventListener("click", seletorDeEstagio);
torre3.posicao.addEventListener("click", seletorDeEstagio);


function seletorDeEstagio(e) {
  let target = e.currentTarget
  if (estagio === 2) {
    soltaDisco(target)
  } else {
    pegaDisco(target)
  }
}
function pegaDisco(target) {
  ultimaPeca = target.lastElementChild;
  console.log("estagio 01")
  if (ultimaPeca !== null) {
    estagio = 2;
  }
  //pegar quem foi clicado
}

function soltaDisco(target) {
  let pecaDeComparacao = target.lastElementChild;
  target.appendChild(ultimaPeca)
  console.log("estagio 02")
  estagio = 1;

}


//verificação de peça de menor / definir peso da peça / condição de movimento de peça - ARY

//verificação do número máximo de peças por torre

//contador de cliques

//condição de vitória / mensagem de vitória

function verificaTamanhoPeca(pecaA, pecaB) {
  return pecaB.tamanho < pecaA.tamanho;
}
function condicaoDeVitoria() {
  return torre2.contador === 4 || torre3.contador === 4;
}
