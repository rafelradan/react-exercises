export default function DiretaFilho(props){
    return(
        <div>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}