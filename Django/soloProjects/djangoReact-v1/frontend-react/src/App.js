import React, { useState } from 'react';
import './App.css';

function App() {
    const [zipCode, setZipCode] = useState('');
    const [showOutput, setShowOutput] = useState(false);
    const [newZipCode, setNewZipCode] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowOutput(true);
      setNewZipCode(zipCode);
    }

    return (
      <div className="center-container">
        <h1 className="title">Enter a Zip Code</h1>
        <form onSubmit={handleSubmit} className="form">
          <input 
            type="text" 
            placeholder="Zip Code" 
            value={zipCode} 
            onChange={(e) => setZipCode(e.target.value)} 
            className="input"
          />
          <button type="submit" className="button">HELLO SHUFFLE</button>
        </form>
        {showOutput && (
          <div className="output">
            <p>Your entered zip code is:</p>
            <p className="zip">{newZipCode}</p>
          </div>
        )}
      </div>
    );
  }

export default App;
