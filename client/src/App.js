import React from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData'

function App() {
  
  const {state, setState} = useApplicationData();

  const artistList = state.earnings.map(comp => 
    <li key ={comp.id}>
      {comp.artist} {comp.rate} {comp.streams} {comp.earnings} {comp.payout}
    </li> )

  return (
    <div className="App">
      <h1>hello</h1>
      <ul>
        {artistList}
      </ul>
    </div>
  );
}

export default App;
