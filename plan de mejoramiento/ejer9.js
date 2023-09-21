alert ('1 indice de masa corpora, 2 Porcentaje de grasa corporal, 3 tasa metabolica basal')
const ops=prompt('1 indice de masa corpora, 2 Porcentaje de grasa corporal, 3 tasa metabolica basal'+""+'            Que opcion desea. Digita solo el numero')
const pgcMas =10.8
const pgcFem =0

if (ops==1){
    const kl= prompt('señor usuario dijite su peso en KL')
    const altu = prompt('señor usuario dijite su altura en MT')
function imc(kl,altu){
        const imc= kl / altu;
        return imc;
    }
        console.log(imc(kl,altu))

}
if (ops==2){
    const se =prompt('1 Para hombres, 2 Para mujeres')
    const kl= prompt('señor usuario dijite su peso en KL')
    const altu = prompt('señor usuario dijite su altura en MT')
    const edad =prompt('señor usuario dijite su edad')
 
    function imc(kl,altu){
        const imc= kl / altu;
        return imc;}
    if (se===1){

        function calpcH(){
        const Pcorp = 1.2*imc+0.23*edad-5.4-pgcMas;
        return Pcorp}}
        else if (se===2){
        const kl= prompt('señar usuario dijite su peso en KL')
        const altu = prompt('señar usuario dijite su altura en MT')
        const edad =prompt('señar usuario dijite su edad')
            function calpcH(){
            const Pcorp = 1.2*imc+0.23*edad-5.4-pgcFem;

    return Pcorp}}
                
}
console.log(calpcH)