import React, {useState} from 'react';
import './Navbar.css';
// import logo from '.../public/logo.png'
import SearchIcon from '@material-ui/icons/Search';
function Navbar(props) {
  const [value, setValue] = useState('');
  return (
    <>
      <nav className='navbar'>
        <div classname='navbar__search'>
          <form className='search__form' onSubmit={event => event.preventDefault()}>
            <input 
              className='radius' 
              spellCheck='false' 
              name='search' 
              type='text' 
              value={value}
              placeholder="Search artist"
              onChange={event => {
                setValue(event.target.value);
                props.onSearchTermUpdate(event.target.value)
              }}
              onBlur={event => {setValue('')}}
            />
            <div className='navbar__icon'>
              {/* <Link to='/result' > */}
                <SearchIcon className='navbar__searchIcon' />
              {/* </Link> */}
            </div>
          </form>
        </div>
      </nav>
   
     
    </>
  )
}

export default Navbar
