import React, { Component } from 'react'

class Event extends Component {
    render() {
        return (
            <div>
                <div>Title: {this.props.name}</div>
                <div>Subs: {this.props.subs}</div>
            </div>
        )
    }
}

export default Event