import React, { useState } from 'react';
import './App.css';

function App() {
    const [zipCode, setZipCode] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setShowOutput(true);
    }
      // https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=90018&radius=4828.03&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc 

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
          <button type="submit" className="button">SHUFFLE</button>
        </form>
        {showOutput && (
          <div className="output">
            <p>Your entered zip code is:</p>
            <p className="zip">{zipCode}</p>
          </div>
        )}
      </div>
    );
  }

export default App;
