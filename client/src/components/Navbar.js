import React, {useState} from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';

function Navbar(props) {
  console.log("Props from navbar", props);
  const [value, setValue] = useState('');

  const handleClick = () => {
    // gett data from search input
    // make new array from state and filter through earnings
    // setState the new array
    let artistName = props.searchTerm.length;
    let element = props.stateArtist.earnings;
    const newArr = element.filter(elm => elm.artist.substring(0,artistName).toUpperCase() === props.searchTerm.toUpperCase());
    props.setState({"earnings":newArr});
  }
  return (
    <>
      <div className='navbar'>
        <img className="navbar__logo" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTKJj0YoODyXWzeQBpP6YeW7Rg1jHAu9Dzg&usqp=CAU"
          alt= "Evening Snow Music Company" property="logo"
        />
        <div className='navbar__company'>
          <h2>Evening Snow Music Company</h2>
        </div>
        <div classname='navbar__search'>
          <form className='search__form' onSubmit={event => event.preventDefault()}>
            <input 
              className='navbar__searchInput' 
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
                <SearchIcon className='navbar__searchIcon' onClick={handleClick}
                />
            </div>
          </form>
        </div>
        <div className='navbar__option'>
          <span className='header__optionFirst'>Welcome</span>
          <span className='header__optionSecond'>ATeam</span> 
        </div>
      </div>
    </>
  )
}

export default Navbar
