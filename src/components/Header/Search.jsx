import React, {Component} from 'react';
import styles from './Search.module.css'


const Search = (props) => {
        return (
            <div className={styles.searchArea}>
                <form className={styles.form}>
                    <input className={styles.input} type='text' placeholder='Enter the event'/>
                    <button className={styles.button} type='submit' />
                </form>
            </div>
        )
    }

export default Search