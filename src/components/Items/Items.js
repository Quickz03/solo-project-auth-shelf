import React, { Component } from 'react';
import { connect } from 'react-redux';





class Items extends Component {


    removeItem = () => {
        console.log(this.props.item.id);
        this.props.dispatch({
            type: 'DELETE_ITEMS',
            payload: this.props.item.id
        })
    }

render() {
        return (
            <div>
            <img src={this.props.item.image_url} alt={this.props.item.description} />
            <div>
                <p> {this.props.item.image_url}</p>
                <p> Name: { this.props.item.description }</p>
            <button onClick={this.removeItem}>Remove</button>
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,

});

export default connect(mapStateToProps)(Items);