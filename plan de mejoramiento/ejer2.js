const kl= prompt('señor usuario dijite su peso en KL')
const altu = prompt('señor usuario dijite su altura en MT')
function imc(kl,altu){
    const imc= kl / altu;
    return imc;
}

console.log('su indice de masa corporal es ='+ imc(kl,altu))