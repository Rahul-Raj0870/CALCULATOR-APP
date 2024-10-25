import { useState } from 'react';
import './App.css';

function App() {
  const [displayContent, setContentValue] = useState('');

  function displayInput(value) {
    // Append the clicked button value to the current display content
    setContentValue(prev => prev + value);
  }

  function clearInput() {
    setContentValue('');
  }

  function deleteLastInput() {
    setContentValue(prev => prev.slice(0, -1));
  }

  function calculateResult() {
    
      const result = eval(displayContent); 
      setContentValue(String(result));
      
    
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col"></div>
        <div style={{ height: '450px' }} className="col-4 bg-dark mt-5 rounded">
          <div style={{ width: '27vw' }}>
            <input style={{ height: '10vh' }} className='w-100 mt-4 fs-1 form-control' type="text" value={displayContent}  readOnly />
          </div>
          <div className='bginfo d-flex justify-content-around align-items-center mt-5'>
            <button onClick={clearInput} style={{ width: '125px', height: '40px',fontSize:'1.3rem',fontWeight:'600' }} className='btn btn-danger text-center '>AC</button>
            <button onClick={deleteLastInput} style={{ width: '125px', height: '40px' }} className='btn btn-secondary text-center'>DEL</button>
            <button onClick={() => displayInput('/')} style={{ width: '100px', height: '40px' }} className='btn btn-light text-center'>/</button>
          </div>

          <div className='bginfo d-flex justify-content-around align-items-center mt-3'>
            <button onClick={() => displayInput('7')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>7</button>
            <button onClick={() => displayInput('8')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>8</button>
            <button onClick={() => displayInput('9')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>9</button>
            <button onClick={() => displayInput('*')} style={{ width: '100px', height: '40px' }} className='btn btn-light text-center'>*</button>
          </div>

          <div className='bginfo d-flex justify-content-around align-items-center mt-3'>
            <button onClick={() => displayInput('4')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>4</button>
            <button onClick={() => displayInput('5')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>5</button>
            <button onClick={() => displayInput('6')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>6</button>
            <button onClick={() => displayInput('+')} style={{ width: '100px', height: '40px' }} className='btn btn-light text-center'>+</button>
          </div>

          <div className='bginfo d-flex  justify-content-around align-items-center mt-3'>
            <button onClick={() => displayInput('1')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>1</button>
            <button onClick={() => displayInput('2')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>2</button>
            <button onClick={() => displayInput('3')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>3</button>
            <button onClick={() => displayInput('-')} style={{ width: '100px', height: '40px' }} className='btn btn-light text-center'>-</button>
          </div>

          <div className='bginfo d-flex  justify-content-around align-items-center mt-3'>
            <button onClick={() => displayInput('0')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>0</button>
            <button onClick={() => displayInput('.')} style={{ width: '80px', height: '40px' }} className='btn btn-light text-center'>.</button>
            <button onClick={calculateResult} style={{ width: '200px', height: '40px' }} className='btn btn-light text-center'>=</button>
          </div>
        </div>
        <div className="col"></div>
      </div>

    </div>
  )
}

export default App;