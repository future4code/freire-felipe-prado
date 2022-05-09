// Questão 1:
// b = 10
// a , b = 10 , 5

// Questão 2:
// a = 10
// b = 20
// c = 10
// b = 10
// a = 10
// a , b , c = 10, 10, 10

//Questão 3:
//let horasDia = prompt ("quantas horas você trabalha por dia?")
//let salarioDia = prompt ("quanto você recebe por dia?")
//alert (`você recebe ${salarioDia/horasDia} por hora.`)

//Exercício 1:

const nome = prompt("qual seu nome?")
let idade = +prompt("qual sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// C) As variavel nome fica UNDEFINED porque é uma string que está vazia, enquanto a idade é uma Function pq não atribui nenhum valor a ela.  
// F) as duas variaveis são Strings

console.log (`Olá, ${nome}, você tem ${idade} anos.`)

//Exercicio 2:
 const tempo = prompt("Choveu hoje?")
 const temperatura = prompt("A temperatura está acima de 30 graus?")
 const diaSemana = prompt("Hoje é Segunda-feira?")
 console.log(`Choveu hoje? - ${tempo}`)
 console.log(`A temperatura está acima de 30 graus? - ${temperatura}`)
 console.log(`Hoje é segunda-feira? - ${diaSemana}`)

//Exercicio 3:
let a = 10
let b = 25
let c = 10
a = b 
b = c


console.log(`o valor de a é ${a}, e o valor de b é ${b}.`)


// DESAFIO
// let n1 = prompt ("qual é o vamor do primeiro numero?")
// let n2 = prompt ("qual é o valor do segundo número?")

// let soma = n1 + n2
// console.log(`soma`)
// let multip = n1 * n2
// console.log(`multip`)
