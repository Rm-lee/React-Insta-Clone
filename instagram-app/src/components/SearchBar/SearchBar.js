import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
 return (
  <div className='search-bar'>
  <div className="logo">
  <i class="fab fa-instagram fa-2x"></i>
  <p>Instagram </p>
  </div>
  <form >
		        <input type="text" name="search" placeholder="Search"/>
          
		</form>
  <div className="icons">
  <i class="far fa-compass fa-2x"></i>
  <i class="far fa-heart fa-2x"></i>
  </div>
  </div>
 );
}
export default SearchBar;