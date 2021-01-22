import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import useApplicationData from './hooks/useApplicationData';
import Accounts from './pages/Accounts';
import Search from './components/Search';


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
 
      <Route path='/search' render={({history}) =>
      <>
        <Navbar onSearchTermUpdate={setSearchTerm} searchTerm={setSearchTerm} />
        {/* <Search history={history} onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} /> */}
      </>
      }/> 
  

    

    </Router>
   
  );
}

export default App;
