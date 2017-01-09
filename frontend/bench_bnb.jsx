import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    window.store = store;
    const user = {username: 'joethomas', id: 1};
    store.dispatch({
      type: 'RECEIVE_CURRENT_USER',
      currentUser: user
    });

    ReactDOM.render(<Root store={ store }/>, root);
});
