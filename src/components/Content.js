import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {
                url: '',
                title: '',
                creation_date: '',
                description: '',
                event_date: '',
                link: ''
            },
            eventsList: []
        };
    }
    async componentDidMount() {
        try {
            const res = await fetch('url');
            const eventsList = await res.json();
            this.setState({
                eventsList
            });
        } catch (error) {
            console.log(error);
        }
    }

    renderEvents = () => {
        const newEvents = this.state.eventsList;
        return newEvents.map( item => (
            <li key={item.id}>
                Название: {item.title}
                Ссылка: {item.link}
                Путь: {item.url}
            </li>
        ));
    };
    render() {
        return (
            <main>
                <div>
                    <ul>
                        {this.renderEvents()}
                    </ul>
                </div>
            </main>
        )
    }
}

export default Content;