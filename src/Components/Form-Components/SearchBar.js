import React from 'react';
import './SearchBarStyles.scss'

const SearchBar = ({searchChange})=>{
    return(
        <div className = 'search-bar'>
        <input 
        className = 'search-text'
        type='search' placeholder='Search'
        onChange= {searchChange}/>
        </div>
    );
}
export default SearchBar