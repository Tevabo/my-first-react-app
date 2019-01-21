import React, { Component } from 'react';

class User extends Component {
    state = { active: true }


    toggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        return (<div><p>User: <b>{this.props.name}</b></p>
        {this.props.name} is currently {this.state.active ? 'present' : <span><b>not</b> present</span>}
        <button onClick={this.toggle}>Check</button></div>
        )

    }
}


export default User