import React from 'react'
import {FaSearch} from 'react-icons/fa'
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input type="text" name="" id="" placeholder='Type to search...'/>
    </div>
  )
}

export default SearchBar
