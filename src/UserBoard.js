import React, { Component } from 'react';

class UserBoard extends Component {
    render(){
        return <h3>{this.props.content}</h3>
    }
}

export default UserBoard