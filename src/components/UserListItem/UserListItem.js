import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserListItem extends Component {

render() {
        return (
            <div>
                <p> Username: { this.props.item.username }</p>
                <p> Items: { this.props.item.count}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,

});

export default connect(mapStateToProps)(UserListItem);