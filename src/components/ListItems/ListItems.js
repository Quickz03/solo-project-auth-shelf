import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../Items/Items';

class ListItems extends Component {

  componentDidMount() {

    this.props.dispatch({ type: 'GET_ITEMS' } );
  }

  render () {
    return (
      <section>
        <div>
          { 
            this.props.reduxState.shelfItems.map(item => 
              <Items key={item.id} item={item} />) 
          }
        </div>
      </section>
    )
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState
})

export default connect(mapReduxStateToProps)(ListItems);