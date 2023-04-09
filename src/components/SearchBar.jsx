import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import "./SearchBar.css"

const SearchBar = () => {
  const [input, setInput] = useState("")

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) =>
    console.log(json)
  )};

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon'/>
      <input
        type="text"
        name=""
        id=""
        placeholder='Type to search...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
