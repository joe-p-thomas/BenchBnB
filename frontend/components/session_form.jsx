import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render () {
    return(
      <form>
        <input></input>
        <input></input>

        <input type='submit' onClick={this.handleSubmit}>{this.props.formType}</input>
      </form>
    );
  }
}
