// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma(10, 30) + 5;
// Qual o valor atualizado dessa variável?
45;
// Declare uma nova variável, sem valor.
var semValor = null;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function noValue(semValor) {
  semValor = 'VALOR';
  return 'O valor da variável agora é' + semValor;
}
// Invoque a função criada acima.
noValue();
// Qual o retorno da função? (Use comentários de bloco).
('VALOR');
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function TreeArg(a, b, c) {
  if (a == null || b == null || c == null) {
    console.log('Preencha todos os valores corretamente!');
  } else {
    return a * b * c + 2;
  }
}
// Invoque a função criada acima, passando só dois números como argumento.
TreeArg(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

('Preencha todos os valores corretamente!');

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

Tree(1, 2, 5);
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
12;
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function treeArgus(x, y, z) {
  if (x === undefined && y === undefined && z === undefined) {
    return console.log('Preencha no minimo um valor!');
  } else if (y == null && z == null) {
    return x;
  } else if (z == null) {
    return x + y;
  } else if (x !== null && y !== null && z !== null) {
    return (x + y) / z;
  } else {
    return console.log('null');
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

//Retorna

//com 1 argumento retornar o valor dado: 1
1(
  //com 2 argumentos retornar a soma dos dois valores: 8
  1,
  7
)(
  // com 3 argumentos retornar a soma dos 2 primeiros e dividi pelo 3 argumento: 4
  1,
  7,
  2
);