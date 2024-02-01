import './App.css';
import Button from './components/Button';
import Clear from './components/Clear';
import Screen from './components/Screen';
import Logo from './images/freecodecamp-logo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [equal, setEqual] = useState(false);

  const [input, setInput] = useState('');

  const addInput = val => {
    console.log(equal);
    if (equal) {
      setInput(val);
      setEqual(false);
    } else {
      setInput(input + val);
    }
    
  };

  const calculate = () => {
    
    if (input) {
      const regex = /^(?:-?\d+(?:\.\d+)?)(?:[\+\-\*\/])(?:-?\d+(?:\.\d+)?)+$/;
      if(regex.test(input)) {
        var result = evaluate(input);
        if(result === undefined || result === Infinity){
          alert('Is not a correct calculation.')  
        }else{
          setInput(result);
          setEqual(true);
        }
      } else {
        alert('Invalid value for calculate.')
        setEqual(true);
      }
    } else {
      alert('Please add values to calculate.')
    }
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img src={Logo} alt="Logo de freeCodeCamp" className='logo'/>
      </div>
      <div className='container'>
        <Screen input={input}/>
        <div className='row'>
          <Button eventClick={addInput}>1</Button>
          <Button eventClick={addInput}>2</Button>
          <Button eventClick={addInput}>3</Button>
          <Button eventClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button eventClick={addInput}>4</Button>
          <Button eventClick={addInput}>5</Button>
          <Button eventClick={addInput}>6</Button>
          <Button eventClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button eventClick={addInput}>7</Button>
          <Button eventClick={addInput}>8</Button>
          <Button eventClick={addInput}>9</Button>
          <Button eventClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button eventClick={calculate}>=</Button>
          <Button eventClick={addInput}>0</Button>
          <Button eventClick={addInput}>.</Button>
          <Button eventClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear eventClear={() => setInput('')}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
