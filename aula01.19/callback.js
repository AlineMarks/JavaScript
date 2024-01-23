function randomica(min=1000, max=3000){
    const numero = Math.random() * (max-min) + min //classe Math metodo random
    return Math.floor(numero) //usando o Math com o metodo floor para aredondar o numero
}
console.log(randomica())

function f1(callback) {
    setTimeout(function(){
        console.log(f1)
        if(callback) callback()
    },randomica())
}

function f2(callback) {
    setTimeout(function(){
        console.log(f2)
        if(callback) callback()
    },randomica())
}

function f3(callback) {
    setTimeout(function(){
        console.log(f3)
        if(callback) callback()
    },randomica())
}

f1(f1Callback)
function f1Callback(){
    f2(f2Callback)
}
function f2Callback(){
    f3(F3Callback)
}
function F3Callback(){
    console.log('Front-end')
} 



