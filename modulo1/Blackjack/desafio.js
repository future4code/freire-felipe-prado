/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   let maoUsuario = []
   let maoComp = []

    console.log("Boas vindas ao jogo de Blackjack!")
    confirm("Quer iniciar uma nova rodada?")
    if(true) {
       maoUsuario.push(comprarCarta())
       maoUsuario.push(comprarCarta())
       maoComp.push(comprarCarta())
       maoComp.push(comprarCarta())
       console.log(maoUsuario, maoComp)
       
         // while (maoUsuario[0].valor === 11 && maoUsuario[1].valor === 11 || maoComp[0].valor === 11 && maoComp[1].valor === 11){
         //    maoUsuario = [comprarCarta(), comprarCarta()]
         //    maoComp = [comprarCarta(), comprarCarta()]
         //    console.log(maoUsuario, maoComp) 
         // } 
       let usuario = maoUsuario[0].valor + maoUsuario[1].valor
       console.log(`Usuário - cartas: ${maoUsuario[0].texto} ${maoUsuario[1].texto} - pontuação ${usuario}`)
       const computador = maoComp[0].valor + maoComp[1].valor
       console.log(`Computador - cartas: ${maoComp[0].texto} ${maoComp[1].texto} - pontuação ${computador}`)

      //  let novaCarta = confirm(`Suas cartas são ${maoUsuario[0].texto} ${maoUsuario[1].texto}. A carta do computador é ${maoComp[0].texto}.\n Deseja comprar mais uma carta?`)
      //  while(novaCarta === true){
      //    let outraCarta = comprarCarta()
      //    maoUsuario.push(outraCarta)
      //    usuario = usuario + outraCarta.valor
      //    let resultadoTexto = ''
      //    for(let carta of maoUsuario) {
      //       resultadoTexto = resultadoTexto + carta.texto + ''
      //    }
      //  }
      //  novaCarta = confirm(`Suas cartas são ${resultadoTexto} totalizando ${usuario}. A carta do computador é ${maoComp[0].texto}.\n Deseja comprar mais uma carta?`) 
      
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