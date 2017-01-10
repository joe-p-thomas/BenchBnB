import React from 'react';
import { connect } from 'react-redux';
import { requestLogin, requestSignup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => {
    return ((ownProps.location.pathname === '/login') ?
      dispatch(requestLogin(user)) :
      dispatch(requestSignup(user))
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
