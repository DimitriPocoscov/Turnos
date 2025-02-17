const N_CURRELAS_TURNO = 3
const N_SEMANAS = 40

let listadoRandom = ["Asier","Ander","Kepa","Txutxi","Samuel","Ortzi","Maite","Arantxa","Erika","Pablo","Tony"]

function eligeAleatorio(listado) {
    let max = listado.length
    let aleatorio = Math.floor(Math.random()* max)
    return listado[aleatorio]
}
function turnos(listado = listadoRandom) {
    let listadoSemanas = listadoAsemanas(listado)
    let minimo = localizaMinimo(listadoSemanas)
    let primero = eligeAleatorio(listadoSemanas)
    let resto = restoListado(listadoSemanas,primero)
    let segundo = eligeAleatorio(resto)
    let resto2 = restoListado(resto,segundo)
    let tercero = eligeAleatorio(resto2)

    console.log(`1)${primero.trabajador} - 2)${segundo.trabajador} - 3)${tercero.trabajador}`)
}
function restoListado(listado,elemento) {
    return listado.filter(
        currela => currela.trabajador != elemento.trabajador
    )
}
function listadoAsemanas(listado) {
    return listado.map(
    (currela,index) => 
        {
            return {
                id : index,
                trabajador : currela,
                semanas : 0
            }
        }
    )
}
function localizaMinimo(listado) {
    return listado.reduce(
        (min,valor)=> min > valor.semanas ? valor.semanas : min ,
        listado[0].semanas
    )
}
turnos()





