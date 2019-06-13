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
  <i class="far fa-compass "></i>
  <i class="far fa-heart "></i>
  <i class="far fa-user "></i>
  </div>
  </div>
 );
}
export default SearchBar;