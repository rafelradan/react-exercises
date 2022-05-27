import produtos from "../../dados/produtos"
import './produtos.css'
export default function ListarProdutos(){

    const getLine = produtos.map((produto, i) => {
        return(
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Imp'}>
                <td>{produto.name}</td>
                <td>{produto.valor.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })

    return(
        <div className="TabelaProdutos">
            
            <table >
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getLine}                        
                </tbody>
            </table>
            
        </div>
    )
    
}