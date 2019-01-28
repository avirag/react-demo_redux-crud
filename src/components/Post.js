import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    const { dispatch, post } = this.props;

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={() => dispatch({type: 'EDIT_POST', id: post.id})}>Edit</button>
        <button onClick={() => dispatch({type: 'DELETE_POST', id: post.id})}>Delete</button>
      </div>
    )
  }
}

export default connect()(Post);