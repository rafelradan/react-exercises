import { useState } from "react"

export default function Contador() {

    const [contador, setContador] = useState(0)

    function inc(){
        setContador(contador + 1)
    }

    function dec(){
        setContador(contador - 1)
    }

    return(
        <div>
            <h3>Contador ReactJS</h3>

            <span>Numero: {contador}</span><br /><br />

            <button onClick={inc}>Adicionar</button>
            <button onClick={dec} >Diminuir</button>

        </div>
    )
}