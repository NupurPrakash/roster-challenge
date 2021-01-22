import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Accounts from '../pages/Accounts';

function Search(props) {

  const styles = {
    display: "flex",
    margin: "50 auto",
  };
  

  const [artist, setArtist] = useState([]);
  console.log("props from search", props)
  useEffect(() => {
    axios.get(`/api/searchArtist/${props.searchTerm}`)
      .then(response => {
        setArtist(response.data);
        console.log("Artists",artist);
      })
      .catch(err => console.log(err.mesage));
    },[]);

  return (
    <div className="search__artist">
      {artist.length === 0 ? (
        <div style={styles}>
          <h2>Artist name not found!!</h2>
          </div> ) : ( <div className="search__artistName">
            { artist.map(name => <Accounts key={name.id} {...name} />)}</div>)
      }
      
    </div>
  )
}

export default Search
