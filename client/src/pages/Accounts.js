
import React from 'react';
import { Table } from 'reactstrap';
// import "react-table/react-table.css"


import './Accounts.css';

// import useApplicationData from '../hooks/useApplicationData';

function Accounts(props) {
  // const {state, setState} = useApplicationData();
  const artistAccount = props.state.earnings.map(comp => 
    <tr>
      <td className='accounts__artistname'>{comp.artist}</td>
      <td className='accounts__rate'>{comp.rate}</td>
      <td className='accounts__stream'>{comp.streams}</td>
      <td className='accounts__earnings'>{(comp.rate * comp.streams).toFixed(2)}</td>
      <td className='accounts__payout'><input type='checkbox'/></td>

    </tr>
   )

  return (
    <>
    <div className='accounts__list'>
      {/* <div className='accounts__artist'> */}
        {/* <table className='accounts__table'> */}
     
        <Table striped bordered hover responsive >
          <thead>
            <tr className='accounts__header'>
              <th className='accounts__artistname'>Artist</th> 
              <th className='accounts__rate'>Rate</th> 
              <th className='accounts__stream'>Streams</th> 
              <th className='accounts__earnings'>Earnings</th> 
              <th className='accounts__payout'>Payout</th> 
            </tr>
          </thead>
          <tbody>
            {artistAccount}
          </tbody>
        </Table>
  
      <div className='accounts__save'>
        <button className='account__update mr-20'>
          Save
        </button>
      </div>
    </div>
    </>
  )
}

export default Accounts
