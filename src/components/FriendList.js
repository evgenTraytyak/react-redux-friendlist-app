import React, { Component, PropTypes } from 'react';
import map from 'lodash/collection/map';
import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
    render() {
        return (
            <ul>
                {
                    map(this.props.friends, (friend) => {
                        return (<FriendListItem
                            key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            starred={friend.starred}
                            {...this.props.actions} />);
                    })
                }
            </ul>
        );
    }
}
