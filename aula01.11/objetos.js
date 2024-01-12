let meuObjeto = {
    Nome: 'Aline',
    Sobrenome: 'Marques da Costa',
    Idade: 27,
    Profissao: 'Dev Full Stack'
}

console.log(Object(meuObjeto)) //todo o objeto
console.log(Object.values(meuObjeto)) //apenas os valores em uma lista

console.log(Object.keys(meuObjeto)) //apenas as chaves em uma lista

console.log(Object(meuObjeto.Nome)) // mostra o tipo (por causa do Object) e o valor de uma chave especifica,

console.log(meuObjeto['Idade']) //mostra apenas o valor de uma chave especifica.

delete meuObjeto.Profissao //deleta a chave especifica de um objeto

console.log(Object(meuObjeto))


meuObjeto['Telefone'] = '(88) 99941 1157' //adicionando nova chave e valor no objeto
console.log(Object(meuObjeto))