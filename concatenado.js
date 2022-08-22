//Concatenando = juntar/colar uma variavel junto com um texto

const pessoa = {
  nome: "Gabriel",
  idade:  224,
  ehMaiorDeIdade: true,
  altura: 1.77
};



if (pessoa.idade < 18){
    console.log(pessoa.nome + " é menor de idade!")
}else if (pessoa.idade < 60 ){
    console.log(`${pessoa.nome} é adulto`)
}else{
   console.log(`${pessoa.nome} é um idoso de $
    {pessoa.idade} anos.`);
}


// comparadores
// >= maior ou igual
// <= menour ou igual
// > maior
// < menor
// == igualdade
// != Diferente
// === verifica o conteudo e tipo ex:se é numero ou texto etc...
