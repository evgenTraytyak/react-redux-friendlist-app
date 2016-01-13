import React, { Component, PropTypes } from 'react';

export default class FriendListItem extends Component {
    render() {
        return (
            <li>
                <div>{this.props.name}</div>
            </li>
        )
    }
}
