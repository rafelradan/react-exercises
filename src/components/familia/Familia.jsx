import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return(
        <div>
           <h2>Familia</h2>

           <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
           <FamiliaMembro nome="Paulo" sobrenome={props.sobrenome}/>
           <FamiliaMembro nome="Bruno" sobrenome={props.sobrenome} />

        </div>
    )
}