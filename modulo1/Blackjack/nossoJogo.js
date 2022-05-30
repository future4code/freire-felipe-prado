/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta.
    // Por exemplo, o rei de ouros
    
    console.log(carta.texto) // 
    imprime o texto da carta. 
    Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // 
    imprime o valor da carta (um número). 
    Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaU = comprarCarta()
   const cartaU2 = comprarCarta()
   const cartaC = comprarCarta()
   const cartaC2 = comprarCarta()

   const usuario = cartaU.valor + cartaU2.valor
   console.log(`Usuário - cartas: ${cartaU.texto} ${cartaU2.texto} - pontuação ${usuario}`)
   const computador = cartaC.valor + cartaC2.valor
   console.log(`Computador - cartas: ${cartaC.texto} ${cartaC2.texto} - pontuação ${computador}`)

   if(usuario > computador){
      console.log("O usuário ganhou!")
   } else if (usuario === computador){
      console.log("Empate!")
   } else {
      console.log("O computador ganhou!")
   }   
   
} else {
   alert("o jogo acabou")
}