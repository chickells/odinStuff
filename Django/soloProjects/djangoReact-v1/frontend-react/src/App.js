import React, { useState } from 'react';
import './App.css';

// WORKING GOOGLE API LINK THAT RETURNS JSON DATA FOR RESTAURANTS
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=${zipCode}&radius=4828.03&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc

function App() {
    const [zipCode, setZipCode] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowOutput(true);

      fetch(`/api/googlemaps/?zip_code=${zipCode}`) // this sends our zipCode variable as a parameter so django 'views.py' file can receive it, then send off to actual API call
        .then(response => response.json())
        .then(data => {
          const restaurants = data.results.map(result => 
            `${result.name}: ${result.formatted_address}`
          );
          console.log(restaurants);
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
            {/* {restaurants} */}
          </div>
        )}
      </div>
    );
  }

export default App;
