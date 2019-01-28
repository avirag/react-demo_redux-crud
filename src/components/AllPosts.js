import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

export class AllPosts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            {post.editing ? <EditComponent key={post.id} post={post} /> : <Post key={post.id} post={post} />}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  }
};

export default connect(mapStateToProps)(AllPosts);
