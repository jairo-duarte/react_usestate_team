import './App.css';
import Turma from './components/Turma';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {

  const turmasInit = [{ 
    id: 1,
    nome: 'LDW1', 
    ano: 2021,
    alunos: [{ nome: 'fulano2' }, { nome: 'beltrano' }] 
  },
  { 
    id: 2,
    nome: 'LDW2', 
    ano: 2021,
    alunos: [{ nome: 'fulano2' }, { nome: 'beltrano' }] 
  }];

  const [turmas, setTurmas] = useState(turmasInit);
  const [removido,setRemovido] = useState();


  function addTurma(){
    const newId = turmas.length + 1;
    turmas.push({
      id: newId,
      nome: 'LDW' + newId, 
      ano: 2021,
      alunos: [{ nome: 'fulano' }, { nome: 'beltrano' }] 
    });
    setTurmas([...turmas]);
  };

  const delTurma = () => {
    if(turmas.length > 0) {  
      setRemovido(turmas.pop());
      setTurmas([...turmas]);
    }else{
      setRemovido(null);
    }    
    
  };

  const json = JSON.stringify(turmas);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
      {
        turmas.map((it) => <Turma key={it.id} idx={it.id} umaTurma={it} setTurmas={setTurmas} />)   
      } 

      <button onClick={addTurma}>Adicionar turma</button>
      <br/>

      {(turmas.length > 0)?<button onClick={() => {delTurma()} }>Remover ultima turma</button>:''}
      {removido && <p>Turma removida: {removido.nome}</p>}
      { json?<textarea style={{'height':'auto'}} value={json} readOnly={true}/>:''}


      <Link to="/about">about</Link>
      </header>
        

    </div>
  );
}

export default App;
