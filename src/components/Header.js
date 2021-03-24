import React from 'react'
import './Header.css'
import Language from './Language'
import Search from './Search'

let Header = () => {
    return(
        <div className='head'>
            <Search />
            <Language />
        </div>
    )
}

export default Header;