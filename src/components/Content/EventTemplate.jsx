import React from 'react';
import styles from './EventTemplate.module.css';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import {NOT_FOUND_IMAGE, NOT_FOUND_IMAGE_LOCAL, IMG_PLACEHOLDER_FRONT} from '../../consts/Constants'


const EventTemplate = (props) => {
    const renderTags = () => {
        const tagList = props.tags;
        if (tagList != undefined) {
            console.log("TITLE:", props.title)
            console.log("tagList:", tagList)
            return tagList.map((item) => (
                <ul>
                    <Tag tagId={item} />
                </ul>
            ));
        }
    };

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
                                    ? IMG_PLACEHOLDER_FRONT
                                    : props.image
                            }
                            alt="1"
                        />
                    </Link>
                </div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                {/* <ol>{renderTags()}</ol> */}
            </div>
        </li>
    );
};

export default EventTemplate;
