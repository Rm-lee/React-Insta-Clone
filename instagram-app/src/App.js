import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  render() {

    return (
      <div className="app">
        {this.state.postData.map(obj => (
          <PostContainer key={obj.id} data={obj} />
        ))
        }
      </div>
    );
  }
}

export default App;

