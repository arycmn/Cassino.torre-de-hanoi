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

torre1.posicao.addEventListener("click", pegaDisco);
torre2.posicao.addEventListener("click", pegaDisco);
torre3.posicao.addEventListener("click", pegaDisco);
estaSelecionado = true;

// e.currentTarget.addEventListener("onclick", soltaDisco(e), false);

function pegaDisco(e) {
  ultimaPeca = e.currentTarget.lastElementChild;
  torre1.posicao.addEventListener("click", soltaDisco);
  torre2.posicao.addEventListener("click", soltaDisco);
  torre3.posicao.addEventListener("click", soltaDisco);
  //pegar quem foi clicado
}

function soltaDisco(e) {
  let output = e.currentTarget;
  document.(e.currentTarget).appendChild(ultimaPeca)
  // output.appendchild(ultimaPeca);
  //appendChild
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
