import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

if (__DEV__) {
    createStore = compose(
        require('redux-devtools').devTools(),
        require('redux-devtools').persistState(
            window.location.href.match(/[?&]debug_session=([^&]+)\b/)
        ),
        createStore
    );
}

export function createDevTools(store) {
    if (__DEV__) {
        let { DevTools, DebugPanel, LogMonitor } = require('react-devtools/lib/react');
        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        );
    }

    return null;
}
