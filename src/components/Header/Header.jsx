import React from 'react'
import './Header.css'
import SelectLanguage from './SelectLanguage'
import Search from './Search'

const Header = () => {
    return(
        <div className='head'>
            <Search />
            <SelectLanguage />
        </div>
    )
}

export default Header;