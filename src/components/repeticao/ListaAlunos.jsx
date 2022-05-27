import React from "react";
import alunos from '../../dados/alunos'
import './alunos.css'


export default function ListaAlunos(props){

   const listStudents = alunos.map(student => {
       return(
           <p key={student.id}>{student.name} <span>{student.grade}</span></p>
       )
   })


   const newStudents = alunos.map((aluno, i) => {
       return(
           <tr key={aluno.id} className={i % 2 == 0 ? 'Par' : 'Imp'}>
               <td>{aluno.name}</td>
               <td>{aluno.grade}</td>
           </tr>
       )
   })

    return(
        
        <div className="TabelaProdutos">
           <h2>Lista de Aluno</h2>
            {listStudents}
            <h2>Novos alunos</h2>

            <table >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {newStudents}
                </tbody>
            </table>
        </div>
    )
}