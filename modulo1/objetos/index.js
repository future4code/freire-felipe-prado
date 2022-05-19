// ex.1 A)
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h";

// ex.2 A)
// nome: Juca, idade: 3, raca: SRD
// nome: Juba, idade: 3, raca: SRD 
// nome: Jubo, idade: 3, raca: SRD
// B) ela copia as PROPRIEDADES dO objeto.

// ex. 3 A)
// false.
// undefined.
// B) porque o console retornou o valor contido na propriedade do objeto.
//(pessoa["backender"])

// ex.1 A)
const pessoa = {
    nome: "Ricardo",
    apelidos: ["R10", "rick", "rock"],
}
function apresentacao(novaPessoa){
    console.log(`eu sou ${novaPessoa.nome}, mas pode me chamar de:
    ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, 
    ou ${novaPessoa.apelidos[2]}.`)
}
//apresentacao(pessoa), exemplo de como chamar a função.

    // B)
const outraPessoa = {
    ...pessoa,
    apelidos: ["zé", "rosé", "zezé"]
}
apresentacao(outraPessoa, "apelidos")

// ex.2 A)
const p1 = {
    nome: "Alfredo",
    idade: 35,
    profissão: "programador",
}
const p2 = {
    nome: "Roberto",
    idade: 40,
    profissão: "pesquisador"
}
function doisObjetos (objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length]
}
//console.log(doisObjetos(p1))
//console.log(doisObjetos(p2))

//ex.3.A)
const carrinho = []

//B)
const fruta1 ={
    nome: "mamao",
    disponibilidade: true 
}

const fruta2 = {
    nome: "pera", 
    disponibilidade: true
}
const fruta3 = {
    nome: "manga",
    disponibilidade: true
}
function tresFrutas(fruta){
    carrinho.push(fruta)
}
tresFrutas([fruta1, fruta2, fruta3])

console.log(carrinho)














