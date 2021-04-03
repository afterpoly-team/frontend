import React from 'react'
import './Header.css'
import Language from './HeaderComponents/Language/translater'
import Search from './HeaderComponents/Search'

const Header = () => {
    return(
        <div className='head'>
            <Search />
            <Language />
        </div>
    )
}

export default Header;