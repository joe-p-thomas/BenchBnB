import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const requestSignup = (user) => (dispatch) => (
  APIUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    (res) => dispatch(receiveErrors(res.responseJSON))
  )
);

export const requestLogin = (user) => (dispatch) => (
  APIUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    (res) => dispatch(receiveErrors(res.responseJSON))
  )
);

export const requestLogout = () => (dispatch) => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  ).fail(
    (res) => dispatch(receiveErrors(res.responseJSON))
  )
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
