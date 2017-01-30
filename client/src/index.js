import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import '../style/index.less';
import PaperEditor from './containers/index';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware));

render(
    <Provider store={store}>
      <PaperEditor/>
    </Provider>,
    document.getElementById('app'));