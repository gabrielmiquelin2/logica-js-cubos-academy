//OPERADORES LÓGICOS




//EXBIR OS REQUISITOS MINIMOS PARA PODER BRINCAR
//Alutra:1.40 e idade:12

//algoritmo do instrutor utlizando operadores lógicos


const pessoa = {
  nome: "Gabriel",
  idade: 13,
  altura: 1.90,
  temPassaporte: false,
}

// ! = NEGAÇÂO
if(!pessoa.temPassaporte){
  console.log("BARRADO,voçe não tem passaporte!") 
}