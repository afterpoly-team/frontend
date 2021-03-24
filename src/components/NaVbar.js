import React from 'react'
import './Navbar.css'

let NaVbar = () => {
    return(
        <div className='nav'>
            <ul type='none'>
                <li>
                    <a href='#s'>Home</a>
                </li>
                <li>
                    <a href='#s'>Мероприятия</a>
                </li>
                <li>
                    <a href='#s'>Личный кабинет</a>
                </li>
                <li>
                    <a href='#s'>Контакты</a>
                </li>
            </ul>
        </div>
    )
}

export default NaVbar;