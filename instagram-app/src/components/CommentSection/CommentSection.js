import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props
    };
    
  }
render() {


  return (
    <div className="comment">
      <div>{this.state.props.data.username}</div>
      <div>{this.state.props.data.text}</div>
    </div>
  );
}
}
export default CommentSection;