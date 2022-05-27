import { ReactDOM } from "react";
import './app.css'

import ComParametro from "./components/comparametro/ComParamentro";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Contador from "./components/contador/Contador";
import Familia from "./components/familia/Familia";
import InputComponent from "./components/formulario/Imput";
import Card from "./components/layaut/Card";
import Primeiro from "./components/primeiro/Primeiro";
import AlunosProdutos from "./components/repeticao/AlunosProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListarProdutos from "./components/repeticao/ListarProdutos";


function App() {
  return (
    <div className="App">

      <div className="cards">

        <Card titulo={'Contador'} >
          <Contador />
        </Card>
        
        <Card titulo={'Imput'} >
          <InputComponent />
        </Card>

        <Card titulo={'Pai e Filho Indireta'} >
          <IndiretaPai />
        </Card>

        <Card titulo={'Pai e Filho Direta'} >
          <DiretaPai />
        </Card>

        <Card titulo={'Par ou Impar'} >
          <ParOuImpar numero={20}/>
        </Card>

        <Card titulo={'Alunos e Produtos'} >
          <AlunosProdutos />
        </Card>

        <Card titulo={'Lista de Produtos'} >
          <ListarProdutos />
        </Card>

        <Card titulo={'Lista de Alunos'} >
          <ListaAlunos />
        </Card>

        <Card titulo={'Familia'} >
          <Familia sobrenome="Ferreira" />
        </Card>

        <Card titulo={'Metas'} color='080'>
          <ComParametro titulo={'Metas 2022'} meta01={'01 - Conseguir uma vaga de programador'} meta02={' 02 - Iniciar a minha faculdade'} />
        </Card>

        <Card titulo={'Primeiro Exercício'}>
          <Primeiro />
        </Card>

      </div>





    </div>
  );
}

export default App;
