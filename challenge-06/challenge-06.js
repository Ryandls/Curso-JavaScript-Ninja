/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?
var championship = 'Carioca';
console.log(championship);
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = [
  'Flamengo',
  'Volta Redonda',
  'Portuguesa',
  'Madureira',
  'Fluminense',
];

console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?
function showTeamPosition(index) {
  if (index < 1 || index > 5) {
    return 'Não temos a informação do time que está nessa posição.';
  }
  return (
    'O time que está em ' + [index] + 'º lugar é o ' + teams[index - 1] + '.'
  );
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

showTeamPosition(0);
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(6);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?

var number = 20;
while (number <= 30) {
  console.log(number);
  number++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?
/* MediumBlue	#0000CD
Turquoise	#40E0D0
SpringGreen	#00FF7F
Violet	#EE82EE
FireBrick	#B22222 */

function convertToHex(cor) {
  switch (cor) {
    case 'MediumBlue':
      console.log('O hexadecimal para a ' + cor + ' é ' + '#0000CD.');
      break;
    case 'Turquoise':
      console.log('O hexadecimal para a ' + cor + ' é ' + '#40E0D0.');
      break;
    case 'SpringGreen':
      console.log('O hexadecimal para a ' + cor + ' é ' + '#00FF7F.');
      break;
    case 'Violet':
      console.log('O hexadecimal para a ' + cor + ' é ' + '#EE82EE.');
      break;

    case 'FireBrick':
      console.log('O hexadecimal para a ' + cor + ' é ' + '#B22222.');

    default:
      console.log('Não temos o equivalente hexadecimal para ' + cor + '.');
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('MediumBlue');
convertToHex('Violet');
convertToHex('FireBrick');
convertToHex('Red');
convertToHex('Blue');
convertToHex('Green');
convertToHex('SpringGreen');
convertToHex('Purple');

// ?
