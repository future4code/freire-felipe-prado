// Interpretacao de código: 
// exercicio 1.
// a) será impresso 10 e 50 respectivamente.
// b) o programa guardaria os valores 10 e 50 que foram retornados.

// exercicio 2.
// a) ela usa o texto inserido pelo usuário e transforma os caracteres em letras minúsculas, e verifica se a palavra CENOURA estava incluída ali, retornando um booleano (TRUE ou FALSE).
// b) i. "eu gosto de cenoura" true; ii. "cenoura é bom pra vista" true; iii. "cenouras crescem na terra" true;

//Escrita de código:
// 1.A)
function sobreMim(){
    const frase = "Eu sou Felipe, tenho 36 anos, moro em SP e sou estudante."
    console.log(frase)
}
sobreMim()

// 1.B)
function inf(nome, idade, cidade, profissao){
return (`eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}

// 2.A)
function doisNumeros(n1, n2){
    const soma = n1 + n2
    return soma 
}
const somando = doisNumeros(4, 8)
console.log(somando)

// 2.B)
function twoNumbers(num1, num2){
    const booleano = num1 >= num2
    return booleano
}
const comparacao =  twoNumbers(10, 8)
console.log(comparacao)

// 2.C)
function numero(nu1){
    const booleano = nu1 % 2 === 0
    return booleano
}
const teste = numero(12)
console.log(teste)

// 2.D)

function texto(t1){
    console.log(t1.length,t1.toUpperCase())
}
const mensagem = "uma mensagem aleatória."
texto(mensagem)

// 3.)
function somar(a1, a2){
    const soma = a1 + a2
    console.log(soma)
}
function subtrair(a1, a2){
    const subtrai = a1 - a2
    console.log(subtrai)
}
function multiplicar(a1, a2){
    const multp = a1 * a2
    console.log(multp)
}
function dividir(a1 ,a2){
    const dividi = a1 / a2
    console.log(dividi)
}
const i1 = Number(prompt("insira um numero"))
const i2 = Number(prompt("insira outro numero"))
somar(i1, i2)
subtrair(i1, i2)
multiplicar(i1, i2)
dividir(i1, i2)

// DESAFIO 
// 1.A)
const novaArrow = (p1) => {
    console.log(p1)
}
// B)
const newFlecha = (p1, p2) => {
    const soma = p1 + p2
    novaArrow(soma)  
}
// newFlecha(2, 4)

// 2.
function pitagoras(c1, c2){
    const hip = Math.sqrt((c1*c1) + (c2*c2))
    return hip
}
console.log(pitagoras(3, 4)) 






































