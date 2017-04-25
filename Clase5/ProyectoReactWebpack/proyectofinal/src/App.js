import React, { Component } from 'react';
import logo from './logo.svg';
import PostList from './PostList';
import './App.css';
import { requestPosts } from './actions';
import { connect } from 'react-redux';
import PostBox from './PostBox';
import PostFetch from './PostFetch';

class App extends Component {
  render() {
    return (
      <div className="App row">
        
        <div className="App-header container-fluid">
          <div className="col-xs-12">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="text-uppercase">Aplicacion desde cero con React</h2>
          </div>
        </div>

        <div className="container">
          <div className="col-xs-12">
            <PostFetch />
            <PostBox />
            <PostList />
          </div>
        </div>
        
      </div>
    );
  }
}

export default connect(
  state => state,
  { requestPosts }
)(App);

//export default App;
