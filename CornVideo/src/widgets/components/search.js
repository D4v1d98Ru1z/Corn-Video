import React from 'react'
import './search.css'

const Search = (props) => (
    <form 
    className="Search"
    onSubmit={props.handleSubmit}
    >
        <input 
        type="text" 
        placeholder="Search" 
        className="Search-input" 
        name="search"
        ref={props.setRef}
        value={props.value}
        />
    </form>
)

export default Search