import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    const { dispatch, post } = this.props;

    return (
      <div className="post">
        <h2 className="post_title">{post.title}</h2>
        <p className="post_message">{post.body}</p>
        <div className="control-buttons">
          <button className="edit" onClick={() => dispatch({type: 'EDIT_POST', id: post.id})}>Edit</button>
          <button className="delete" onClick={() => dispatch({type: 'DELETE_POST', id: post.id})}>Delete</button>
        </div>
      </div>
    )
  }
}

export default connect()(Post);