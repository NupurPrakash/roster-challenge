import {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state, setState] = useState({earnings: []});


  useEffect(() => {
    axios({
      method: 'GET',
      url: '/earnings'
    })
    .then(result => setState(prev => ({ ...prev, earnings: result.data})))
    .catch((err) => console.log(err))
  }, []);

  return {
    state,
    setState
  }
}
export default useApplicationData;