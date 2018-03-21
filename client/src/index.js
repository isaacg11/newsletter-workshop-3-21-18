import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class NewsletterForm extends Component {

    render() {
        return (
            <div>
                <input type="email" onChange={(e) => this.setState({userEmail: e.target.value})}/>
                <button onClick={() => this.subscribe()}>Submit</button>
            </div>
        )
    }

    subscribe() {
        axios.post('/subscribe', this.state).then(() => {
            alert('You have been successfully subscribed!')
        }).catch((err) => {
            alert(err)
        })
    }

}

render(
    <NewsletterForm />,
    document.getElementById('root')
)
