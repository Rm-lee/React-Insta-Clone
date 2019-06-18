import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    };
  }
  componentDidMount(){
    this.setState({postData:dummyData})
  }
  render() {

    return (
      <div className="app">
      <SearchBar />
        {this.state.postData.map(obj => (
          <PostContainer key={obj.id} data={obj} />
        ))
        }
      </div>
    );
  }
}

export default App;

