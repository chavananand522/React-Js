import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            this.state.isLoggedIn && <h1>Welcome Abc!</h1>

        )
    }
}

export default UserGreet