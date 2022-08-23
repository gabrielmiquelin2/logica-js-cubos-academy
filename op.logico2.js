//OPERADORES LÓGICOS

// ! = NEGAÇÂO


//EXBIR OS REQUISITOS MINIMOS PARA PODER BRINCAR
//Alutra:1.40 e idade:12

//algoritmo do instrutor utlizando operadores lógicos


const pessoa = {
  nome: "Gabriel",
  idade: 13,
  altura: 1.90,
}
// && = E
if(pessoa.idade > 12 && pessoa.altura > 1.40 ){
    console.log(`${pessoa.nome} PODE BRINCAR!`);
}else{
  console.log (`${pessoa.nome} NÂO PODE BRINCAR!`)
}


// || = OU
if(pessoa.idade >= 12 || pessoa.altura >= 1.40 ){
  console.log(`${pessoa.nome} PODE BRINCAR!`);
}else{
  console.log (`${pessoa.nome} NÂO PODE BRINCAR!`)
}


