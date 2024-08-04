import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleGenerate = () => {
    setQrValue(inputValue);
  };

  return (
    <div className='App'>
      <input 
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Introduce un texto o url'
      />
      <button onClick={handleGenerate}>Generar QR</button>

      {qrValue && (
        <div>
          <h2>Codigo:</h2>
          <QRCode value={qrValue} />
          </div>
      )}

    </div>
  );
}

export default App;
