import React from 'react'
import styles from './Header.module.css'
import SelectLanguage from './SelectLanguage'
import Search from './Search'

const Header = () => {
    const pageWidth = document.documentElement.scrollWidth
    return (
        <div className={styles.head}>
            <div className={styles.bgPhoto} />
            <Search/>
            <SelectLanguage/>
        </div>
    )
}

export default Header;