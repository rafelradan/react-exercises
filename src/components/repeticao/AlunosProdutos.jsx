
import alunos from "../../dados/alunos"
import produtos from "../../dados/produtos"

export default function AlunosProdutos(){

   const listaDeAlunos = alunos.map((aluno, i) => {
        return(
            <tr key={aluno.id} className={i % 2 === 0 ? 'Par' : 'Imp'}>
                <td>{aluno.name}</td>
                <td>{aluno.grade}</td>
            </tr>
        )
    })

    const listaDeProdutos = produtos.map((produto, i) =>{
        return(
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Imp'}>
                <td>{produto.name}</td>
                <td>{produto.valor}</td>
            </tr>
        )
    })

    return(
        <div className="TabelaProdutos">
            <h2>Alunos e Produtos</h2>
            <table >
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                        {listaDeAlunos}
                    </tbody>
            </table>
            <table >
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                        {listaDeProdutos}
                    </tbody>
            </table>


        </div>
    )
}