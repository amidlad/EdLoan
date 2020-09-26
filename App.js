/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppContainer from './src/navigation/AppContainer';
import userReducer from './src/store/reducer/userreg';
import userListReducer from './src/store/reducer/userlist'

const rootReducer = combineReducers({
  userReducer: userReducer,
  userListReducer: userListReducer,
});

/*
    redux-api-middleware uses the Fetch API to make the API call.
    [RSAA].body should hence be a valid body according to the fetch specification.
    In most cases, this will be a JSON-encoded string or a FormData object.
    It may also be a function taking the state of your Redux store as its argument, and returning a body as described above.
*/

/*
 *compose* is a functional programming utility, and is included in Redux as a convenience to apply several store enhancers in a row
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
