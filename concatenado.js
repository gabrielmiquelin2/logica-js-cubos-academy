//Concatenando = juntar/colar uma variavel junto com um texto

const pessoa = {
  nome: "Gabriel",
  idade:  11,
  ehMaiorDeIdade: true,
  altura: 1.77
};

if (pessoa.idade < 18){
    console.log(pessoa.nome + " é menor de idade!")
}else if (pessoa.idade < 60 ){
    console.log("é adulta!")
}else{
   console.log(" é idosa!")
}


// comparadores
// >= maior ou igual
// <= menour ou igual
// > maior
// < menor
// == igualdade
// != Diferente
// === verifica o conteudo e tipo ex:se é numero ou texto etc...
