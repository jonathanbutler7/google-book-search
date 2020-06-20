import React from 'react';
import './Searchbar.css'

class Searchbar extends React.Component {
    render() {
        return (
            <div className="Searchbar">
                <label htmlFor="search">Search: </label>
                <input 
                type="text" 
                name="search" 
                id="search" 
                placeholder="Enter a book title"
                ></input>
                <button>Search</button>
            </div>
        )
    }
}

export default Searchbar