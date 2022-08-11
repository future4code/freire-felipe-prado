// 1.
// a.
let minhaString: string = ""
// caso atribuo um número a string, o console acusa o erro.

// b.
let meuNumero: number | string = ''
meuNumero = "felipe"
meuNumero = 37
// para criarmos uma variável com mais de um valor utilizamos o sinal de | do Union Type

// c.
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const serVivo: Pessoa = {
    nome: "felipe",
    idade: 30,
    corFavorita: "azul"
}
const alguem: Pessoa = {
    nome: "rafael",
    idade: 25,
    corFavorita: "amarelo"
}
const outroAlguem: Pessoa = {
    nome: "arthur",
    idade: 20,
    corFavorita:"vermelho"
}
const maisUm: Pessoa = {
    nome: "esperanto",
    idade: 55,
    corFavorita: "violeta"
}

// d.
enum corFavorita {
    VERMLEHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    INDIGO = "indigo",
    VIOLETA = "violeta"
}
const corSubstituta = {
    cor: corFavorita.INDIGO 
}

console.log(corSubstituta)

// 2.
// a.
function obterEstatisticas(numeros: number[]): void {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b.
// numerosOrdenados: number;
// soma: number;
// num: number;
// maior: number;
// menor: number;
// media: number;

// c.

type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros?: number) => void
}

const amostra: amostraDeDados = {
    numeros: [22, 23, 24, 25, 26],
    obterEstatisticas: () => void {}
}

// 3.
// a.
type umPost = {
    autor: string,
    texto: string
}[]

const posts: umPost = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// b.
function buscarPostsPorAutor(posts: any, autorInformado: string): void {
    return posts.filter(
      (post: any) => {
        return post.autor === autorInformado
      }
    )
  }






