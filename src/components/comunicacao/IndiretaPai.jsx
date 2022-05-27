import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai (){

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)



    function informacoes(nome, idade, nerd){
       // console.log(nome, idade, nerd);
        setName(nome)
        setAge(idade)
        setNerd(nerd)
    }
    return(
        <div>
            <h2>I'm the father</h2>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>

            <div>
                <IndiretaFilho quandoClicar={informacoes}/>
            </div>
            
        </div>
    )
}