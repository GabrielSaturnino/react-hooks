import './App.css';
import { useState, useEffect } from 'react';

// ---------Não usar hooks dentro de blocos!----------

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const eventfn = () => {
    console.log('H1 clicado');
  };

  // //Component DidUpdate -> executa toda vez que o componente atualiza!
  // useEffect(() => {
  //   console.log('Update!');
  // });

  // //Component DidMount -> executa 1x
  // useEffect(() => {
  //   console.log('component Did Mount!');
  // }, []);

  //Dependencia -> Parametro mudou, esse metodo sera chamado!
  useEffect(() => {
    console.log(`Dependencia! ${counter}`);
    document.querySelector('h1')?.addEventListener('click', eventfn);
    // a ? é um chain operator, se o elemento selecionado nao existir
    // o codigo apos a ? não sera executado!
  }, [counter]);

  //willUmoint
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventfn);

    //componentWillUmount -> limpeza?
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventfn);
    };
  }, []);

  return (
    <div className="App">
      <p>salve 1</p>
      <h1>
        Contador: {counter} Contador2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)} type="button">
        +
      </button>
      <button onClick={() => setCounter2(counter2 + 1)} type="button">
        +2
      </button>
    </div>
  );
}

export default App;
