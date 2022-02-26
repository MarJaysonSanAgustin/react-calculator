import React, { useState, useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import logo from './logo.svg';
import './App.css';

function App() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    console.log(`Output >> ${output}`);
  }, [output]);

  const handleFirstInputChange = event => handleInputChange(event.value, setFirstInput);
  const handleSecondInputChange = event => handleInputChange(event.value, setSecondInput);

  const handleInputChange = (value, setValue) => {
    const finalValue = +value;
    if (finalValue < 0) return;
    setValue(value);
  };

  const handleAddition = () => {
    const input1 = firstInput ? +firstInput : 0;
    const input2 = secondInput ? +secondInput : 0;
    setOutput(input1 + input2);
  }
  
  const handleSubtraction = () => {
    const input1 = firstInput ? +firstInput : 0
    const input2 = secondInput ? +secondInput : 0
    setOutput(input1 - input2);
  }

  const handleMultiplication = () => {
    const input1 = firstInput ? +firstInput : 0
    const input2 = secondInput ? +secondInput : 0
    setOutput(input1 * input2);
  }

  const handleDivision = () => {
    const input1 = firstInput ? +firstInput : 0
    const input2 = secondInput ? +secondInput : 0
    setOutput(input1 / input2);
  }
  
  const handleReset = () => {
    setFirstInput('');
    setSecondInput('');
    setOutput('');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Calculator</p>
        <InputNumber placeholder='First input' style={{ marginBottom: '5px' }} value={firstInput} onChange={handleFirstInputChange} />
        <InputNumber placeholder='Second input' style={{ marginBottom: '5px' }} value={secondInput} onChange={handleSecondInputChange} />
        <div style={{ marginBottom: '5px' }}>
          <Button className="p-button-sm" style={{ marginLeft: '3px', marginRight: '3px' }} icon="pi pi-plus" onClick={handleAddition} />
          <Button className="p-button-sm" style={{ marginLeft: '3px', marginRight: '3px' }} icon="pi pi-minus" onClick={handleSubtraction}/>
          <Button className="p-button-sm" style={{ marginLeft: '3px', marginRight: '3px' }} icon="pi pi-times" onClick={handleMultiplication}/>
          <Button className="p-button-sm" style={{ marginLeft: '3px', marginRight: '3px' }} label="/" onClick={handleDivision}/>
        </div>
        <InputText style={{ marginBottom: '5px' }} readOnly placeholder='Output' value={output} />
        <div style={{ marginBottom: '5px' }}>
          <Button className="p-button-sm" style={{ marginLeft: '3px', marginRight: '3px' }} icon="pi pi-replay" onClick={handleReset}/>
        </div>
      </header>
    </div>
  );
}

export default App;
