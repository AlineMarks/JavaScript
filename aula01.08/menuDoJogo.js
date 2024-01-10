const propmt = require ('prompt-sync')()

const options = Number(propmt('Escolha:\n1 - New Game\n2 - Load Game\n3 - Setting\n4 - Quit\n >>> '))

switch(options){
    case 1:
        console.log('Carregando Novo Jogo')
        break
    case 2:
        console.log('Carregando Jogo')
        break
    case 3:
        console.log('Configurações de tela/audio\nConfigurações do controle/teclado\nConfiguração geral')
        break
    case 4:
        console.log('Tem certeza que deseja sair do jogo, o progresso pode ser comprometido')
        break

}