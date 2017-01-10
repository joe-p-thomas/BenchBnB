import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render () {
    const errors = this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));
    return(
      <div>
        <ul>
          { errors }
        </ul>
        <form>
          Username:
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.username}
                 name='username'>
          </input>
          <br></br>
          Password:
          <input type='text'
                 onChange={this.handleInput}
                 value={this.state.password}
                 name='password'>
          </input>
          <br></br>
          <button onClick={this.handleSubmit}>{this.props.formType.slice(1)}
          </button>
        </form>
        <p>-- or --</p>
        <Link to={this.props.formType === '/signup'?
                  '/login' : '/signup'} >
          {this.props.formType === '/signup'? 'login' : 'signup'}
        </Link>
      </div>

    );
  }
}

export default withRouter(SessionForm);
