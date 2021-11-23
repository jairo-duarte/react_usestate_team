import React from 'react';
import { useParams } from 'react-router';

function About() {

    let params = useParams();

    const extraText = params.extraText ? params.extraText : '';


  return (<div className="App">
  <header className="App-header">
    <p>Sobre meu primeiro site reactJs</p>
    <p>{extraText}</p>
  </header>

  </div>);
}

export default About;