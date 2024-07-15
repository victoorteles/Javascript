const estudante = 'Gabriela';
let professora;

professora = 'Ana';

console.log(estudante,professora);

//Escopo global
  //Qualquer variável que esteja no escopo global pode ser acessada por outras partes do programa. Uma variável é considerada global quando não é declarada dentro de nenhuma função ou bloco.
const nome = ‘Camila’; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”
//Escopo de bloco
  //Variáveis declaradas dentro de chaves { }, como no caso de if, for, while etc., não ficam acessíveis para código que esteja de fora. Chamamos o código dentro das { } de bloco.
if (1 > 0) {
    let nome = ‘Ana’;
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined
  //IMPORTANTE:
  //Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco. Faça o teste:
if (1 > 0) {
    var nome = ‘Ana’;
    console.log(nome); // ‘Ana’
  }
  
  console.log(nome); // ‘Ana’
  //A falta de “controle” de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais recomendam apenas o uso de const e let.
//Escopo de função
  //Variáveis declaradas dentro de uma função são consideradas “locais” (ou seja, o oposto de “globais”) e não podem ser acessadas por código que esteja fora do bloco da função.
  function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
  }
  
  // as variáveis não podem ser acessada de fora da função
  console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console