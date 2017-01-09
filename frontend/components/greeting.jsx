import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  loggedIn() {
    return !!this.props.curentUser;
  }

  render() {
    if (this.loggedIn()){
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logOut()}>log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>sign up</Link>
          <Link to='/login'>log in</Link>
        </div>
      );
    }
  }
}

export default Greeting;
