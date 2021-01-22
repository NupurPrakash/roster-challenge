import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Accounts from './pages/Accounts';
import Search from './components/Search';

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(searchTerm)
  }, [searchTerm])

  return (
    
    <Router>
      <Switch>
        <Route path='/'>
          <Navbar onSearchTermUpdate={setSearchTerm} />
          <Accounts />
        </Route>
        <Route path='/search' render={({history}) =>
        <>
          <Navbar onSearchTermUpdate={setSearchTerm} searchTerm={setSearchTerm} />
          <Search history={history} onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} />
        </>
        }/> 
      </Switch>
    </Router>
  );
}

export default App;
