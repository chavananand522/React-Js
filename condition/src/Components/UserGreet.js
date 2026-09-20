import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let msg
        if (this.state.isLoggedIn) {

            msg = <h1>Welcome Abc!</h1>
        } else {
            msg = <h1>Welcome Guest</h1>
        }
        return msg;
    }
}

export default UserGreet