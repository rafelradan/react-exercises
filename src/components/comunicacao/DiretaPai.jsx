
import DiretaFilho from "./DiretaFilho"

export default function DiretaPai(props){
    return(
        <div>
            <span>Pai</span>
            <DiretaFilho nome = 'Rafael' idade={28} nerd={true} />
            <DiretaFilho nome = 'Junior' idade={20} nerd={false} />
        </div>
    )
}