/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var array = [1, 'Bryan', 3, 'Douglas', 5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function Array(arg) {
  return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
Array(array[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function twoArray(arr, index) {
  return arr[index];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arr = [true, 1, 'Douglas', undefined, null];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
twoArray(arr, 0);
twoArray(arr, 1);
twoArray(arr, 2);
twoArray(arr, 3);
twoArray(arr, 4);
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(bookName) {
  livros = {
    'Harry Potter': {
      quatidadePaginas: 520,
      autor: 'Autor do Harry Potter',
      editora: 'Editora do Harry Potter',
    },
    'Senhor Dos Aneis': {
      quatidadePaginas: 750,
      autor: 'Autor do Senhor Dos Aneis',
      editora: 'Editora do Senhor Dos Aneis',
    },
    'Persy Jackson': {
      quatidadePaginas: 480,
      autor: 'Autor do Persy Jackson',
      editora: 'Editora do Persy Jackson',
    },
  };

  return !bookName ? livros : livros[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

var bookName = 'Harry Potter';

console.log(
  'O Livro' + bookName + ' tem ' + book(bookName.quatidadePaginas) + ' páginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log('O Livro' + bookName + ' tem ' + book(bookName).autor);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log(
  'O livro ' +
    bookName +
    ' foi publicado pela editora ' +
    book(bookName).editora
);
