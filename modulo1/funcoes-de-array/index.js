// Ex.1)
// object [i] array
// {nome: "Amanda Rangel", apelido:"mandi"} 0 (3) [{nome: "Amanda Rangel", apelido:"mandi"},{nome: "Laís Petra", apelido:"Laura"}, {nome "Letícia chijo", apelido:"Chijo"}]
// {nome: "Laís Petra", apelido:"Laura"} 1 (3) [{nome: "Amanda Rangel", apelido:"mandi"},{nome: "Laís Petra", apelido:"Laura"}, {nome "Letícia chijo", apelido:"Chijo"}]
// {nome "Letícia chijo", apelido:"Chijo"} 2 (3) [{nome: "Amanda Rangel", apelido:"mandi"},{nome: "Laís Petra", apelido:"Laura"}, {nome "Letícia chijo", apelido:"Chijo"}]

// Ex.2)
// ['Amanda Rangel', 'Laís Petra', 'Letícia chijo']

// Ex.3)
// {nome: "Amanda Rangel", apelido: "Mandi" },
// {nome: "Laís Petra", apelido: "Laura" }

// EXERCICIO 1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const novoArray = pets.map((pet) => {
   // console.log(pet.nome)
    return pet.nome
})

const newArray = pets.filter((pet) => {
    if(pet.raca === "Salsicha"){
        console.log(pet.nome)
    }
})

const arrayPoodles = pets.filter((pet) => {
    return pet.raca === "Poodle"
})
const nomesPoodles = arrayPoodles.map((pet) => {
return `você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
}) 
console.log(nomesPoodles)

// EXERCÍCIO 2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//A)
const arrayNovo = produtos.map((produto) => {
     return produto.nome 
 })
console.log(arrayNovo)
//B)
const arrayNew = produtos.map((produto) => {
    const objeto = {
        nome: produto.nome,
        preco: produto.preco*0.95
    }
    return objeto
})
console.log(arrayNew)
//C)

const arrayBebidas = produtos.filter((produto) => {
    return produto.categoria === 'Bebidas'
})
console.log(arrayBebidas)

//D)
const outroArray = produtos.filter((produto) => {
     return produto.nome.includes('Ypê')
})
console.log(outroArray)

//E)
const arrayFrase = outroArray.map((produto) => {
    return (`Compre ${produto.nome} por ${produto.preco}`)
})
console.log(arrayFrase)