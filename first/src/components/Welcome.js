// rce

import React, { Component } from 'react'

class Welcome extends Component {
  render() {
        // this.props.name="pqr" -- error
    return (
      <div>Welcome {this.props.name} also known as {this.props.hname}</div>
    )
  }
}

export default Welcome