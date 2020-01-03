import React, { useState } from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log(searchInput);
    }

    return (
        <div>
            <form className="searchbar" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                    placeholder="Sök efter snus"               
                />
                <input 
                    type="submit"
                    value="SÖK"
                />
            </form>
        </div>
    )
}

export default SearchBar
