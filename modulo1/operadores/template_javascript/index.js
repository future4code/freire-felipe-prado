//exercicio 1
"a. false"
"b. false"
"c. true"
"d. boolean"

//exercicio 2
//o prompt retorna String, e nesse caso o sinal de + concatena sa variaveis ao invés de somá-las.
// Assim, caso o primeiroNumero seja 1 e o segundoNumero seja 2 o resultado é 12, e não 3. 

// exercicio 3
// adicionando o termo Number antes do prompt nas variaveis primeiro e segundo números.

//exercicio de escrita 1.
const idade = Number(prompt("qual sua idade?"));
const idadeAmigo = Number(prompt("qual a idade do amigo"));
console.log("Sua idade é maior que a do seu amigo", idade > idadeAmigo)
console.log(idade - idadeAmigo)

//exercicio de escrita 2.
const par = Number(prompt("insira um numero par"));
console.log(`quanto sobra ao dividirmos o numero par ${par} por 2`, par % 2)
// o resto da divisão sempre é igul a 0.
// no caso de um numero ímpar o resto da divisão é igual a 1.

// exercicio de escrita 3.
const idadeAnos = Number(prompt("qual a sua idade"));
console.log("sua idade em meses é", idadeAnos * 12);
console.log("sua idade em dias é", idadeAnos * 365);
console.log("sua idade em horas de vida é", idadeAnos * 365 * 24);

// exercicio 4.
const n1 = Number(prompt("escreva um número"));
const n2 = Number(prompt("escreva outra número"));
console.log("o primeiro número é maior que o segundo?", n1 > n2);
console.log("o primeiro número é igual ao segundo?", n1 === n2);
console.log("o primeiro número é divisivel pelo segundo?", n1 % n2 === 0);
console.log("o segundo número é divisivel pelo primeiro?", n2 % n1 === 0); 
