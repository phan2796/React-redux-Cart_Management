import React, { Component } from 'react';

class Message extends Component {
    render() {
        var {msg} = this.props;
        return (
            <h3>
                <span className="badge amber darken-2">{msg}</span>
            </h3>
        );
    }
}

export default Message;
