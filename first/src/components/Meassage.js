import React, { Component } from 'react'

class Meassage extends Component {
    // rconst
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome Visitor!'
        }
    }
    changeMsg() {
        this.setState ( {
            message: 'Welcome Pqr!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMsg()}>Login</button>
            </div>
        )
    }
}

export default Meassage