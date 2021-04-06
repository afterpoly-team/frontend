import React from 'react'
import styles from './Header.module.css'
import SelectLanguage from './SelectLanguage'
import Search from './Search'

const Header = () => {
    return(
        <div className={styles.head}>
            <Search />
            <SelectLanguage />
        </div>
    )
}

export default Header;