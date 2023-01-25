import P from 'prop-types';
import './App.css';
import { useState, useEffect } from 'react';

// ---------Não usar hooks dentro de blocos!----------

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter(counter + num);
  };

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
