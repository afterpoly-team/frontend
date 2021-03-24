import React, { Component } from 'react';
import axios from 'axios';
import Event from './CreateEvent'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchEvent: {
                name: '',
                subs: '',
            }
        }
        this.fetchEvent = this.fetchEvent.bind(this);
    }

    fetchEvent() {
        axios.get('url.com')
        .then( (response) => {
            console.log('response', response);
            this.setState({
                fetchEvent:response.data
            })
            console.log('fetchEvent', this.state.fetchEvent);
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <input placeholder='Enter the event' />
                <button onClick={this.fetchEvent}>Search</button>
                <Event name={this.state.fetchEvent.name} subs={this.state.fetchEvent.subs} />
            </div>
        )
    }
}

export default Search