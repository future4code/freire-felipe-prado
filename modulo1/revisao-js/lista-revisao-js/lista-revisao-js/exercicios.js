// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let novaArray = array 
    novaArray.sort((a, b)=>{
        if (a < b) {
            return -1
        } else if (a > b){
            return 1
        } else {
            return 0
        }
    })
    return novaArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayNumeros = []
    for (let i = 0; i < array.length; i++){
       if (array[i] % 2 === 0){
           arrayNumeros.push(array[i])
       }
    }
    return arrayNumeros
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayNumerosPares = retornaNumerosPares(array)
    let paresElevados = arrayNumerosPares.map((numero)=>{
        return numero * numero
    })
    return paresElevados
} 


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++){
    if (array[i] > maior){
        maior = array[i]
    }
  }
  return maior 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorN = num1
    let menorN = num2
    if(num2 - num1 > 0){
        maiorN = num2
        menorN = num1
    }
    let maiorDivisivel = false
    if (maiorN % menorN === 0){
        maiorDivisivel = true 
    }
    let diferenca = maiorN - menorN
    let objeto = {
        maiorNumero: maiorN,
        maiorDivisivelPorMenor: maiorDivisivel,
        diferenca:diferenca
    }
    return objeto
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}