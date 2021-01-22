import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Accounts from './pages/Accounts';
import useApplicationData from './hooks/useApplicationData';

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const {state, setState, stateArtist} = useApplicationData();

  useEffect(() => {
    setSearchTerm(searchTerm)
  }, [searchTerm])

  return (
    
    <Router>
      <Switch>
        <Route path='/'>
          <Navbar onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} setState={setState} stateArtist={stateArtist} />
          <Accounts state={state} setState={setState} />
        </Route>
        {/* <Route path='/search'>
          <Navbar onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} />
          <Search  onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} />        
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
