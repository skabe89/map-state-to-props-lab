import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          { this.props.userCount }
          { this.props.users.map(user => <h3> {user.username}: {user.hometown} </h3>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
