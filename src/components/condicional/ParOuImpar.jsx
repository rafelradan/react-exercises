
export default function ParOuImpar(props){

    const isPar = props.numero

    return(
        <div>
            {isPar % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}