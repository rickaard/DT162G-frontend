import React, { useState, useEffect, useRef } from 'react'
import {Link} from 'react-router-dom';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState(undefined);
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const node = useRef();

    const handleSubmit = event => {
        // gör så att sidan inte refreshar vid submit av form
        event.preventDefault();
    }

    const handleClick = e => {
        // om man trycker innanför diven så returna från funktion
        if (node.current.contains(e.target)) return;
        // om man trycker utanför dölj sökresultatrutan
        setShowSearchResult(false);
        setShowErrorMsg(false);
    }

    // varje gång searchInput-state uppdateras så gör en fetch om searchInput innehåller fler än 1 tecken
    useEffect(() => {
        // om input är mindre än 1 tecken dölj sökresultatrutan och returnera från funktionen
        if (searchInput.length < 1) return setShowSearchResult(false);
        if (searchInput.length >= 1) {

            fetch(process.env.REACT_APP_SEARCH + searchInput)
            .then(res => res.json())
            .then(data =>  {
                setSearchResult(data);
                setShowSearchResult(true);
            })
            .catch(err => {
                console.log(err);
                setShowErrorMsg(true);
            })
        }
    }, [searchInput]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, []);

    return (
        <div>
            <form className="searchbar" onSubmit={handleSubmit} ref={node}>
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
                {showSearchResult && (
                    <div className="search-result">
                        {searchResult && (
                            searchResult.map((snus, index) => {
                                return <span key={index}><Link to={`/snus/${snus._id}`}>{`${snus.brand} ${snus.product}`}</Link></span>
                            })
                        )}
                    </div>
                )}
                {showErrorMsg && (
                    <div className="search-result">
                        <span>Problem med att nå databasen.</span>
                        <span>Försök igen senare.</span>
                    </div>
                )}
            </form>

        </div>
    )
}

export default SearchBar
