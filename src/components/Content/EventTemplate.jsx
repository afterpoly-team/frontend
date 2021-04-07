import React from 'react'
import styles from './EventTemplate.module.css'

const EventTemplate = (props) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardPhoto}>
                <img className={styles.photo}
                    src='https://sun9-62.userapi.com/impg/iu2cN8UC3bFNuKJ8Byv1h_mwqttJtQnTmiFFoA/vAtefHKR3wE.jpg?size=984x984&quality=96&sign=47f0706e7ac9adea851a575e57f3a54c&type=album'
                    alt='1'/>
            </div>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.description}>
                gg
            </div>
        </div>
    )
}

export default EventTemplate;