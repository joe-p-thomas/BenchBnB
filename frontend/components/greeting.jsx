import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.loggedIn = this.loggedIn.bind(this);
  }

  loggedIn() {
    return !!this.props.currentUser;
  }

  render() {
    if (this.loggedIn()){
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logout}>log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>sign up</Link>
          <br></br>
          <Link to='/login'>log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;
