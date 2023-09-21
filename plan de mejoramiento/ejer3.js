const num = prompt('señor usuario dijite un numero para verificar si es par o impar:')
function comprobarPar(num){
    if (num / 2||0){
    return 'Su numero es par'
    }
    else if(num / 2 == 0){ 
    }return 'numero inpar'
}

console.log(comprobarPar(num))