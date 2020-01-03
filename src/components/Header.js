import React from 'react'

import SearchBar from './SearchBar';
import HeaderText from './HeaderText';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <HeaderText />
            <SearchBar />
        </div>
    )
}

export default Header
