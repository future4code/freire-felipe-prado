function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numeroVezes = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
   if (numeroEscolhido === arrayDeNumeros[i]){
     numeroVezes = numeroVezes + 1
   }
   } if (numeroVezes === 0) {
     return (`Número não encontrado`)
   }
    return (`O número ${numeroEscolhido} aparece ${numeroVezes}x`)
}