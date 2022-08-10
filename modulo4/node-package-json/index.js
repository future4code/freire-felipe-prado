//A. através do comando process.argv

//B
let nome = process.argv[2]
let idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//C
const novaIdade = Number(idade + 7)
console.log(`Olá, ${nome}! Você tem ${idade} anos. em sete anos você terá ${novaIdade}`)

//2

const valorTerminal = Number(process.argv[4])
const segundoValor = Number(process.argv[5])
const operacao = process.argv[6]

switch(operacao) {
    case "soma":
        console.log("Resposta:", valorTerminal + segundoValor)
        break;
    case "sub":
        console.log("Resposta:", valorTerminal - segundoValor)
        break;
    case "mult":
        console.log("Resposta:", valorTerminal * segundoValor)
        break;
    case "div":
        console.log("Resposta:", valorTerminal / segundoValor)
        break;
    default:
        console.log("deu errado")
        break;
}

    //3

    const listaDeTarefas = [
        "lavar a louça",
        "fazer comida",
    ]

    const adicionaTarefa = processo.argv[6]

    listaDeTarefas.push(adicionaTarefa)
    console.log(listaDeTarefas)

