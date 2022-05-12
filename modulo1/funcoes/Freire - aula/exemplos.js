//------------ Estruturação de funções--------------
// ------------ **Funções nomeadas ---------------
function formatar(){
    //AQUI DENTRO VAI A LÓGICA
    return //recebe o resultado depois da lógica aplicada
}

// ------------ Funções Anônimas --------------
const formatar=function(){
    //AQUI DENTRO VAI A LÓGICA
    return //recebe o resultado depois da lógica aplicada
}
// ----------- **Arrow Functions ---------------

const formatar = () => {
    //AQUI DENTRO VAI A LÓGICA
    return //recebe o resultado depois da lógica aplicada
}

//------------Exemplos------------

// let nome1 = "Bill Gates  "
// let nome2 = " Jeff Bezos"
// let nome3 = "Elon Musk"
// console.log(nome1);
// nome1 = nome1.toLowerCase()
// console.log(nome1);
// nome1 = nome1.trim()
// console.log(nome1);
// nome1 = nome1.replaceAll(" ", "-")
//   console.log(nome1);
// //----------------

// nome2 = nome2.toLowerCase()
// nome2 = nome2.trim()
// nome2 = nome2.replaceAll(" ", "-")
// console.log(nome2);
// //--------------
// nome3 = nome3.toLowerCase()
// nome3 = nome3.trim()
// nome3 = nome3.replaceAll(" ", "-")
// console.log(nome3);


// exemplo de função 1

// function formatar(nome){
//     nome=nome.toLowerCase()
//     nome=nome.trim()
//     nome=nome.replaceAll(" ", "-")

//     return nome
// }

// const nomeDoBilionário1 = formatar(nome1)
// const nomeDoBilionário2 = formatar(nome2)
// const nomeDoBilionário3 = formatar(nome3)

// console.log(nomeDoBilionário1, nomeDoBilionário2, nomeDoBilionário3)

// function saudacao3(){
//     const nome = prompt("Qual seu nome?")
//     const idade = prompt("Qual sua idade?")

//     console.log(`Olá ${nome}, sua idade é ${idade} anos`);
// } 
// const resposta=saudacao3()
// console.log("resposta", resposta)


// _______________ESCOPO______________

// const nome = "Felipe"

// function imprimeNome(){
//     const idade = 18
//     console.log("NA FUNÇÃO",nome, idade)
   
//     function imprimeFrase (){
//         const comidaPreferida = "temaki"
//         console.log(`Olá eu sou ${nome}, tenho ${idade} e goste de comer ${comidaPreferida}`)
//     }
  
//     imprimeFrase()
//    return idade
// }
//  const idadeDoReturn = imprimeNome()

// console.log("NOME",nome);
// console.log("IDADE",idadeDoReturn);
//  console.log("comida",comidaPreferida);