import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
 return (
  <div className='search-bar'>
  <div className="logo">
  <i className="fab fa-instagram fa-2x"></i>
  <p>Instagram </p>
  </div>
  <form >
		        <input type="text" name="search" placeholder="Search"/>
          
		</form>
  <div className="icons">
  <i className="far fa-compass "></i>
  <i className="far fa-heart "></i>
  <i className="far fa-user "></i>
  </div>
  </div>
 );
}
export default SearchBar;