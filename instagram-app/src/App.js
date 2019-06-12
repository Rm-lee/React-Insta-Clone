import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from '../../dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
     this.state = {
       postData:[]
      };
  }
  
  render() {
    return (
      <div className="container">
      {dummyData.map(obj => (
        <PostContainer data={obj}/>
      ))           
      }
      </div>
    );
  }
}

export default App;

