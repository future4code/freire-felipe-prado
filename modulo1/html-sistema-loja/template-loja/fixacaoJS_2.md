function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let precoFinal
  if (quantidade >= 12) {
    precoFinal = quantidade*1
  } else {
    precoFinal = quantidade*1.3
  }
  return precoFinal
}