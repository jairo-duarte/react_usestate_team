import React, { useState } from 'react';

// import { Container } from './styles';

function Turma(props) {

    const [ turma,setTurma ] = useState(props.umaTurma);
  
    const quandoBLur = (event) => {
        turma.nome = event.target.value; 
        setTurma(turma);
        //setTurma({...turma});        
        //props.setTurmas(lista=>lista.map(it=>it.id===turma.id?{...turma}:it));
    }
    return <>
        <h1>{turma.nome}</h1> 
        <input type="text" value={turma.nome} onChange={quandoBLur}/>
    </>;
}

export default Turma;