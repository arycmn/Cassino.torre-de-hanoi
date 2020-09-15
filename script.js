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

  condicaoDeVitoria();
}

//Condição de Vitória - ADD DIV GRANDE DE VITORIA
function condicaoDeVitoria() {
  if (
    torre2.posicao.childElementCount === 4 ||
    torre3.posicao.childElementCount === 4
  ) {
    let p = document.createElement("p");
    let div = document.getElementById("resposta");
    p.innerHTML = "Parabéns você Venceu!!";
    div.appendChild(p);
  }
}

//Contador de Tempo de resolução do Desafio
let contador = 60
function cronometro (){
  document.getElementById('tempo').innerText = contador
  console.log(contador)

  if(contador == 0) {
		alert = "GAME OVER";
	}
	if (contador != 0){
		contador = contador-1;
		setTimeout("cronometro()", 1000);
	}
}
cronometro()
