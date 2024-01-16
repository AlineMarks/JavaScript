let venda = 3000

if (venda >= 2500) {
    console.log(`CASO 1 - Você gahou a gratificação por ter vendido ${venda} você ganhou ${venda*0.05} de gratificação `)
}else {
    console.log(`você vendeu ${venda} portanto não superou nossa meta, então não ganhará a gratificação`)
}

venda >=2500 ?  console.log(`CASO 2 - Você gahou a gratificação por ter vendido ${venda} você ganhou ${venda*0.05} de gratificação `) : console.log(`você vendeu ${venda} portanto não superou nossa meta, então não ganhará a gratificação`)

const vendas = venda >= 2500 ? 'CASO 3 - você ganhou a gratificação' : 'você não ganhou sua gratificação'

console.log(vendas)