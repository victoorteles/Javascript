//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
let nome = 'Victor';
let sobrenome = 'Teles';
let nomeCompleto = (nome + sobrenome);

console.log (`Olá, ${nome} ${sobrenome}`)


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
// Declaração da variável booleana
const estaChovendo = true; // Pode ser true (está chovendo) ou false (não está chovendo)

// Estrutura condicional (if)
if (estaChovendo) {
  console.log("É melhor levar um guarda-chuva!");
} else {
  console.log("Não é necessário levar um guarda-chuva.");
}
