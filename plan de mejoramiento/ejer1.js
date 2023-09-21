const gradosc = prompt('ingrese la temperatura en grados centígrados de quiere convertir ');
function calcularGrados(gradosc){
    const gradosf=gradosc*1.8+32
    return gradosf
}
console.log('los grados Fahrenheit son=' + calcularGrados(gradosc))