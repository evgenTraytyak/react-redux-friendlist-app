import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import DevTools from '../utils/devTools';
import FriendListApp from './FriendListApp';


export default class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <FriendListApp />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
