//1
function checaTriangulo(a: string, b: string, c: string): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  //2 
  function imprimeTresCoresFavoritas(): void {
   const cor1: string = prompt("Insira sua primeira cor favorita")
   const cor2: string = prompt("Insira sua segunda cor favorita")
   const cor3: string = prompt("Insira sua terceira cor favorita")
   console.log([cor1, cor2, cor3])
}

