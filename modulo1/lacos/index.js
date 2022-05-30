// Ex.1)
// 10

// Ex.2.A)
// [19, 21, 23, 25, 27, 30] 

// B) sim. Podemos acessar o numero através do valor por índice que temos dentro do array.

// Ex.3) 10

//ex.1)
// let bichosEstimacao = Number(prompt("quantos bichos de estimação vc tem?"))
//     let array = []
//     if(bichosEstimacao === 0){
//         console.log("Que pena! você pode adotar um pet.")
//     } else {
//             for (let i = 0; i < bichosEstimacao; i++) {
//             let pet = prompt("digite o nome do seu pet.")
//             array.push(pet) 
//             }  
//         }
// console.log(array)

//ex.2)
//A)
let arrayOriginal = [ 25, 12, 5, 56, 78, 89]
function imprimir (){
    for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
    }
}
imprimir()

//B)
function dividir (){
    for(let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i]/10)
    }
}
dividir()

//C)
function pares (){
    let novoArray = []
    for(let i = 0; i < arrayOriginal.length; i++){
        let par = arrayOriginal [i] % 2 === 0
        if(par){
            novoArray.push(arrayOriginal[i])
        }
    }
console.log(novoArray)
}
pares()

//D)
function string (){
    let newArray = []
    for(let i = 0; i < arrayOriginal.length; i++){
        let texto = `O elemento do index ${i} é o número ${arrayOriginal[i]}.`
        newArray.push(texto)
    }
console.log(newArray)
}
string()

//E)
function maiorMenor(){
    let maior = -Infinity
    let menor = Infinity
    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i]>maior){
        maior = arrayOriginal[i]
        }
    }
    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i]<menor){
        menor = arrayOriginal[i]
        }
    }
    console.log(maior)
    console.log(menor)
}
maiorMenor()





























