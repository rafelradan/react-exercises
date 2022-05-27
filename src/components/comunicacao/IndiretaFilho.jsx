
export default function IndiretaFilho (props){
    //Enviando dados para o componente pai
    const sendInformacoes = props.quandoClicar
    
    return(
        <div>
           <div> 
               <span>I'm the chield</span>
           </div>
            <button onClick={function(e){
                sendInformacoes('Rafael Radan', 28 , true)
            }}>Fornecer Informações</button>

            <button onClick={function(e){
                sendInformacoes('Rafael Radan', 28 , true) 
            }}>Enviar Dados</button>
        </div>
    )
}