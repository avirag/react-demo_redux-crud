import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPosts />
      </div>
    );
  }
}

export default App;
