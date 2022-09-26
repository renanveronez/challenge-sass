// 1º maneira de criar um Objeto, abrindo e fechando chaves
var a = {}

// 2º maneira de criar um Objeto, dentro da função
function obj(n, s) {
  return {
    nome: n,
    sobrenome: s
  }
}

var b = obj("Renan", "Veronez")
console.log(b);

// 3º maneira de criar um Objeto, dentro da função, mas sem haver um retorno
// Pra esse modelo sem return, é necessário instanciar com o New

function obj(n, s) {

  this.nome = n;         // this representa a instância do próprio objeto
  this.sobrenome = s;

}

var c = new obj("Renan", "Veronez")
console.log(c);
console.log(c.nome);
console.log(c["sobrenome"]);

// *********************************************


var aluno = {   // Conjunto de propriedades, que correspondem a chave e valor
  nome: "Renan",
  nota1: [7.5, 5.0]
}

console.log(aluno.nome, aluno.nota1);
// Que é o mesmo que:
console.log(aluno["nome"], aluno["nota1"]);

console.log(aluno); // Vai imprimir toda a estrutura do  objeto

// Para incluir propriedades:

aluno.matricula = 12345;
aluno["middleName"] = "Veronez";
// ou
var novaPropriedade = "lastName";
aluno[novaPropriedade] = "Drechsler";

console.log(aluno);

// **************************************************

// Quando objeto tem uma variável, ela é uma propriedade.
// Quando objeto tem uma função, então é um método.

var aluno = {
  nome: "Renan",
  notas: [5, 10],

  media: function (n1, n2) {   // Isso seria o método media
    return (n1 + n2) / 2;
  }
}

console.log(aluno)
console.log("Media: " + aluno.media(aluno.notas[0], aluno.notas[1]))


function calcMedia(n1, n2) {
  return (n1 + n2) / 2;
}

var aluno1 = {
  nome: "Joao",
  notas: [10, 0],

  media: calcMedia
}


console.log(aluno1)
console.log("Media: " + aluno1.media(aluno1.notas[0], aluno1.notas[1]))
// É o mesmo que:


console.log(" ");
console.log(" THIS ");

var aluno2 = {
  nome: "Pedro",
  notas: [2, 4],

  media: function () {
    return (this.notas[0] + this.notas[1]) / 2;  // O this daqui vai se referir as notas do Pedro
  }
}
var aluno3 = {
  nome: "Mario",
  notas: [8, 10],

  media: function () {
    return (this.notas[0] + this.notas[1]) / 2;  // O this daqui vai se referir as notas do Mario
  }
}
// O this vai mudar de acordo com o contexto e sempre vai ser utilizado com objetos.

console.log("Nota do Pedro (this): " + aluno2.media())
console.log("Nota do Mario (this): " + aluno3.media())

console.log(" ");
console.log(" THIS - Com função fora do objeto");

// Com a função fora do objeto, é posto o this dentro dela e dessa forma, a mesma função pode ser
// copiada para dentro do objeto de todos os alunos. Assim, se houver necessidade de alteração,
// é preciso somente alterar na função, que vai ser apropriada para todos os alunos

function calcMediaAlunoFinal() {
  return (this.notas[0] + this.notas[1]) / 2;
}
// * Como essa função possui o "this", ela só vai funcionar quando for um método de um objeto.

var aluno4 = {
  nome: "Aluno Quatro",
  notas: [6, 6],

  media: calcMediaAlunoFinal
}

var aluno5 = {
  nome: "Aluno Cinco",
  notas: [9, 9],

  media: calcMediaAlunoFinal
}

// O this vai mudar de acordo com o contexto e sempre vai ser utilizado com objetos.

console.log("Nota do Aluno Quatro (this): " + aluno4.media())
console.log("Nota do Aluno Cinco (this): " + aluno5.media())
