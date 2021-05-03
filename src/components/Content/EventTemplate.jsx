import React from 'react';
import styles from './EventTemplate.module.css';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import {NOT_FOUND_IMAGE, NOT_FOUND_IMAGE_LOCAL} from '../../consts/Constants'


const EventTemplate = (props) => {
    const renderTags = () => {
        const tagList = props.tags;
        if (tagList != undefined) {
            return tagList.map((item) => (
                <ul>
                    <Tag tagId={item} />
                </ul>
            ));
        }
    };

    console.log(props.image)

    return (
        <li>
            <div className={styles.cardWrapper}>
                <div className={styles.cardPhoto}>
                    <Link
                        to={`/${props.eventType}/${props.identificat}`}
                        href={props.link}
                    >
                        <img
                            className={styles.photo}
                            src={
                                props.image ===
                                NOT_FOUND_IMAGE_LOCAL
                                    ? 'https://sun9-62.userapi.com/impg/iu2cN8UC3bFNuKJ8Byv1h_mwqttJtQnTmiFFoA/vAtefHKR3wE.jpg?size=984x984&quality=96&sign=47f0706e7ac9adea851a575e57f3a54c&type=album'
                                    : props.image
                            }
                            alt="1"
                        />
                    </Link>
                </div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <ol>{renderTags()}</ol>
            </div>
        </li>
    );
};

export default EventTemplate;
