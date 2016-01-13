import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import FriendList from '../components/FriendList';

@connect(state => ({
  friendlist: state.friendlist
}))

export default class FriendListApp extends Component {
    render() {
        const { friendlist: { friendsById }, dispatch } = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <div>
                <FriendList friends={friendsById} actions={actions} />
            </div>
        );
    }
}
