// ex.1
// A) o código pega um numero com o usuário, coloca ele na condicional, e se o numero for divisivel por 2 ele passou no teste, senão não passou.
// B) numeros pares.
// C) números ímpares

// ex.2 
// A) Para imprimir a fruta, e para cada fruta ele imprime o respectivo preço.
// B) a mensagem será "o preço da fruta Maçã é R$2.25."
// C) "o preço da fruta Pêra é R$5"


// ex.3
// A) recebendo um número digitado pelo usuário.
// B) se for 10 "Esse número passou no teste.", se for -10 "mensagem is undefined." 
// C) sim, pois variavel mensagem está presa ao escopo local da condicional, porém está sendo chamada no escopo global.

//Ex.1
let idade = Number(prompt("qual a sua idade?"))
if(idade >= 18) {
    console.log("você pode dirigir")
    } else {
        console.log("você não pode dirigir")
}

// Ex.2
let turno = prompt("qual o turno que você estuda? Digite M (matutino), V(vespertino) ou N(noturno).").toUpperCase()
if(turno === "M") {
    console.log("Bom Dia!")
    } else if (turno === "V") {
        console.log("Boa Tarde!")
    } else if (turno === "N") {
        console.log("Boa Noite!")
    } else {
        console.log("Este período não existe.")
}

// Ex.3
switch (turno) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Este periodo não existe.")
}

// Ex.4

let generoFilme = prompt("qual o gênero de filme que você vai assitir?")
let precoIngresso = prompt("qual o preço do ingresso do filme?")
if (generoFilme === "fantasia" && precoIngresso < 15){
    console.log("Bom filme!")
    } else {
    console.log("Escolha outro filme :(")    
}




