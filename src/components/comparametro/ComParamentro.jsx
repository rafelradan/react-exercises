import React from "react";

export default function ComParametro (props){
    return(
        <div>
            
            <h2>{props.titulo}</h2>
            <ul>
                <li>
                    <h4>{props.meta01}</h4>

                </li>
                <li>
                    <h4>{props.meta02}</h4>
                </li>
            </ul>
            
        </div>
    )
} 