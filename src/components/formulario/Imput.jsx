import { useState } from "react"

export default function InputComponent(){

    const [inpValue, setInpValue] = useState()

    return(
        <div>
            <span>Imput JSX {inpValue}</span><br />
            <input onChange={e => setInpValue(e.target.value)} />
            
        </div>
    )
}