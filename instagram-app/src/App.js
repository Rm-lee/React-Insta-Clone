import React from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
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
     <PostComponent />
      </div>
    );
  }
}

export default App;

