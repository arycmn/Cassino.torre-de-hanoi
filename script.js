// Objetos que definem as torres e os discos
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

let alvo;
let pecaDeComparacao;
let ultimaPeca;
let estagio;
let contadorDeJogadas = 0;
let dolar = 2000;

// btnplay.addEventListener("click", cronometro);
torre1.posicao.addEventListener("click", seletorDeEstagio);
torre2.posicao.addEventListener("click", seletorDeEstagio);
torre3.posicao.addEventListener("click", seletorDeEstagio);

//Função que seleciona se é estagio de pegar ou dropar o disco
function seletorDeEstagio(e) {
  let target = e.currentTarget;
  if (estagio === 2) {
    soltaDisco(target);
  } else {
    pegaDisco(target);
  }
}

//Função que pega/seleciona o disco
function pegaDisco(target) {
  ultimaPeca = target.lastElementChild;
  console.log("estagio 01");
  if (ultimaPeca !== null) {
    ultimaPeca.style.marginBottom = "60px";
    estagio = 2;
  }
}

//Função de dropa o disco
function soltaDisco(target) {
  pecaDeComparacao = target.lastElementChild;
  ultimaPeca.style.marginBottom = "0px";

  if (pecaDeComparacao === null) {
    target.appendChild(ultimaPeca);
  } else if (pecaDeComparacao.clientWidth > ultimaPeca.clientWidth) {
    target.appendChild(ultimaPeca);
  }
  console.log("estagio 02");
  estagio = 1;
  contadorDeJogadas++;
  document.getElementById("jogadas").innerText = contadorDeJogadas;
  condicaoDeVitoria();
}

//Condição de Vitória - ADD DIV GRANDE DE VITORIA
function condicaoDeVitoria() {
  if (
    torre2.posicao.childElementCount === 4 ||
    torre3.posicao.childElementCount === 4
  ) {
    //resultado(vitoria);
    let body = document.getElementById("body2");
    let div = document.createElement("div");
    div.className = "vitoria";
    div.innerHTML = "Você venceu!";
    body.appendChild(div);
    reset();
  }
}

//Contador de Tempo de resolução do Desafio
let contador = 60;
let setTime;

function cronometro() {
  document.getElementById("tempo").innerText = contador;

  if (contador === 0 || dolar <= 0) {
    //let derrota = "Você Perdeu!";
    //resultado(derrota);
    let body = document.getElementById("body2");
    let div = document.createElement("div");
    div.className = "derrota";
    div.innerHTML = "Você Perdeu!";
    body.appendChild(div);
    //reset();
  }

  if (contador != 0) {
    setTime = setInterval("cronometro()", 1000);
    contador = contador - 1;
  }
  marcaScore();
}
cronometro();

//Score
function marcaScore() {
  dolar = Math.floor(0 + 16.6666666667 * contador - contadorDeJogadas * 100);
  document.getElementById("score").innerText = dolar;
  console.log(score);
}

function reset() {
  window.clearTimeout(setTime());
}

// function resultado(mensagem) {
//   let body = document.getElementById("body2");
//   let div = document.createElement("div");
//   div.className = "resultado";
//   div.innerHTML = mensagem;
//   body.appendChild(div);
//   reset();
// }
