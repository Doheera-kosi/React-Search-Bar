import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import "./SearchBar.css"

const SearchBar = () => {
  const [input, setInput] = useState("")
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input
        type="text"
        name=""
        id=""
        placeholder='Type to search...'
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar
