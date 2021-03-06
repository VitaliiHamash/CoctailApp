import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './app/src/store';
import { fetchUsers } from './app/src/actions/user';

const store = configureStore();

store.dispatch(fetchUsers());

const ReduxTutorial = () =>
<Provider store={store}>
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => ReduxTutorial);