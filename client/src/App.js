import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import useApplicationData from './hooks/useApplicationData';
import Accounts from './pages/Accounts';


function App() {
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(searchTerm)
  }, [searchTerm])


  return (
    
    <Router>
      <Route path='/'>
        <Navbar onSearchTermUpdate={setSearchTerm} />
        <Accounts />
      </Route>

    </Router>
   
  );
}

export default App;
