
import React from 'react';
import useApplicationData from '../hooks/useApplicationData';

function Accounts() {
  const {state, setState} = useApplicationData();
  const artistAccount = state.earnings.map(comp => 
    <tr>
      <td className='accounts__artistname'>{comp.artist}</td>
      <td className='accounts__rate'>{comp.rate}</td>
      <td className='accounts__stream'>{comp.streams}</td>
      <td className='accounts__earnings'>{(comp.rate * comp.streams).toFixed(2)}</td>
      <td className='accounts__payout'><input type='checkbox'/></td>

    </tr>
   )

  return (
    <div className='accounts__list'>
      <div className='accounts__artist'>
        <table className='accounts__table'>
          <tr className='accounts__header'>
            <th className='accounts__artistname'>Artist</th> 
            <th className='accounts__rate'>Rate per Stream</th> 
            <th className='accounts__stream'>No Of Streaming</th> 
            <th className='accounts__earnings'>Total earnings</th> 
            <th className='accounts__payout'>Payout</th> 
          </tr>
          {artistAccount}
        </table>
      
      </div>
      <div className='accounts__save'>
        <button className='account__update mr-20'>
          Save
        </button>
      </div>

      
     

      
    </div>
  )
}

export default Accounts
