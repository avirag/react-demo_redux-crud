import React, { Component } from 'react';
import { connect } from 'react-redux';

export class EditComponent extends Component {
  state = {
    title: this.props.post.title,
    body: this.props.post.body,
  }

  handleSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;
    const { dispatch } = this.props;

    const data = {
      title,
      body,
    }

    dispatch({
      type: 'UPDATE',
      id: this.props.post.id,
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
    const { post } = this.props;

    return (
      <div>
        <h1>Update Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input defaultValue={post.title} name="title" required type="text" placeholder="Enter title" onChange={this.handleInputChange}/><br /><br />
          <textarea defaultValue={post.body} name="body" required rows="5" cols="28" placeholder="Enter body" onChange={this.handleInputChange} /><br /><br />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default connect()(EditComponent);
