import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;
    const { dispatch } = this.props;

    const data = {
      id: new Date(),
      title,
      body,
      editing: false
    }

    dispatch({
      type: 'ADD_POST',
      data
    });
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input name="title" required type="text" placeholder="Enter title" onChange={this.handleInputChange}/><br /><br />
          <textarea name="body" required rows="5" cols="28" placeholder="Enter body" onChange={this.handleInputChange} /><br /><br />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm)
