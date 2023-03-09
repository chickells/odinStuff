import { useState } from 'react';
import './App.css';

// https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=10&t=1745s

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <Person name={'test'} lastName={'lastname'} age={25}/>
      <Person />
    </div>
  );
}

export default App;
