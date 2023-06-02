import React, { useState } from 'react';
import './App.css';

// WORKING GOOGLE API LINK THAT RETURNS JSON DATA FOR RESTAURANTS
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=$90018&radius=4828.03&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc

function App() {
    const [zipCode, setZipCode] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowOutput(true);

      fetch('/api/googlemaps/')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Use the data returned from Django here...
        })
        .catch(error => console.error(error))
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
          <button type="submit" className="button">SHUFFLE</button>
        </form>
        {showOutput && (
          <div className="output">
            {zipCode}
          </div>
        )}
      </div>
    );
  }

export default App;
