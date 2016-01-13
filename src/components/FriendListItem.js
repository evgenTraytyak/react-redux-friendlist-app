import React, { Component, PropTypes } from 'react';

export default class FriendListItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }

    render() {
        return (
            <li>
                <div>{this.props.name}</div>
            </li>
        )
    }
}
