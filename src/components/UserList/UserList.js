import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListItem from '../UserListItem/UserListItem';

class UserList extends Component {

  componentDidMount() {

    this.props.dispatch({ type: 'SET_COUNT' } );
  }

  render () {
    return (
      <section>
        <div>
          { 
            this.props.reduxState.itemsCount.map(item => 
              <UserListItem key={item.id} item={item} />) 
          }
        </div>
      </section>
    )
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(UserList);