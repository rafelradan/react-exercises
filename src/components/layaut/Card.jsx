import React from "react";

import './style.css'

export default function Card(props){
    return(
        <div className="card">
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}