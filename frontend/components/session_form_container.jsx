import React from 'react';
import { connect } from 'react-redux';
import { requestLogin, requestSignup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processform: (user) => {
    return ((ownProps.location.pathname === 'login') ?
      dispatch(requestLogin(user)) :
      dispatch(requestSignup(user))
    );
  }
});
