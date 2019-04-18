import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShelfItemForm extends Component {
  
  state = {
    newItem: {
    description: '',
    url: '',
    }
  };

  handleChange = propertName => event => {
    this.setStatw({
      newItem: {
        ...this.state.newItem,
        [propertName]: event.target.value,
      }
    })
  }

  addNewItem = event => {
    event.preventDefault();
    this.props.disptach({type: 'POST_ITEMS', payload: this.state.newItem })
  }

  render() {
    return (
      <form>
        <label>Description</label>
        <input value={this.state.newItem.description} onChange={this.handleChange('description')}></input>
        <label>URL</label>
        <input value={this.state.newItem.url} onChange={this.handleChange('url')}></input>
        <button onClick={this.addNewItem}>Submit</button>
      </form>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);
