import React, { useState } from 'react';


function Turma(props) {

    const [ turma,setTurma ] = useState(props.umaTurma);
  
    const quandoMudar = (event) => {
        turma.nome = event.target.value; 
        //setTurma(turma);
        setTurma({...turma});        
        props.setTurmas(lista=>lista.map(it=>it.id===turma.id?{...turma}:it));
    }
    return <>
        <h1>{turma.nome}</h1> 
        <input type="text" value={turma.nome} onChange={quandoMudar}/>
    </>;
}

export default Turma;