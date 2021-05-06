import React, { Component } from 'react';
import { Route } from 'react-router';
import styles from './Content.module.css';
import Event from './Event';
import EventList from './EventList';
import Home from './Home';
import EventTemplate from './EventTemplate';
import {ONLINE_EVENT, REAL_LIFE_EVENT, PLACE} from '../../consts/Constants'

const Content = () => {
    return (
        <div className={styles.cont}>
            <div>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path={`/${ONLINE_EVENT}s/:page`}
                    render={(props) => (
                        <EventList {...props} eventType={ONLINE_EVENT} />
                    )}
                />
                <Route
                    path
                    path={`/${ONLINE_EVENT}/:id`}
                    render={(props) => (
                        <Event {...props} eventType={ONLINE_EVENT} />
                    )}
                />
                <Route
                    exact
                    path={`/${REAL_LIFE_EVENT}s/:page`}
                    render={(props) => (
                        <EventList {...props} eventType={REAL_LIFE_EVENT} />
                    )}
                />
                <Route
                    path
                    path={`/${REAL_LIFE_EVENT}/:id`}
                    render={(props) => (
                        <Event {...props} eventType={REAL_LIFE_EVENT} />
                    )}
                />
                <Route
                    exact
                    path={`/${PLACE}s/:page`}
                    render={(props) => (
                        <EventList {...props} eventType={PLACE} />
                    )}
                />
                <Route
                    path
                    path={`/${PLACE}/:id`}
                    render={(props) => (
                        <Event {...props} eventType={PLACE} />
                    )}
                />
                <Route path path="/contacts/" component={Event} />
            </div>

        </div>
    );
};

export default Content;
