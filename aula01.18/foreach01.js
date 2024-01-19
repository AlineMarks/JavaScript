const repetentes = ['Felipe', 'Logan', 'Zidany']

repetentes.forEach(function(nome){
    console.log(`Eu ${nome} sou repetente`)
})

repetentes.forEach(nome => console.log(`Eu ${nome} sou repetente de novo`))

const exibirRepretenres = repetentes => console.log(`Repetente: ${repetentes}`)
repetentes.forEach(exibirRepretenres)