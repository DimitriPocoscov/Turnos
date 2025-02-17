
import { useState } from "react"
import "./Currela.css"

function randomColor() {
    let listado = "0123456789ABCDEF"
    let color = '#'
    for (let i=0; i<3; i++) {
        color += listado[Math.floor(Math.random()*12)]
    }
    return color
}
export function AnadeCurrela({manageAdd}) {
    return (
        <article>
            <input type="text" placeholder="Anade nuevo currela" id="anadeCurrela"/>
            <button
                onClick = {
                    () => {
                        let texto = document.getElementById("anadeCurrela").value
                        manageAdd(texto)
                    }
                }
            >Anadir</button>
        </article>
    )
}
export function Currela({ nombre,manageErase }) {
    const [color,setColor] = useState(randomColor())
    return (
        <article
        style={{backgroundColor : color}}
        >
            <span>{ nombre }</span>
            <button onClick={manageErase}>Eliminar</button>
        </article>
    )
}
export default Currela