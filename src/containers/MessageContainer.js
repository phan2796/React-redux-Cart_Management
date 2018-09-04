import React, { Component } from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class MessageContainers extends Component {
    render() {
        var {message} = this.props;
        console.log(message);
        return (
            <Message msg={message}/>

        );
    }
}
MessageContainers.propTypes = {
    message : PropTypes.string.isRequired
}
const mapStateToProps = state => {
    return {
        message: state.messages
    }
}
export default connect(mapStateToProps, null)(MessageContainers);

