import React, { Component } from 'react';
import CommentForm from './CommentForm'
import Comment from './Comments'
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
      comment:''
    };
     
  }
   
  changeHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = event => { 
    console.log(this.state.comments);
    event.preventDefault();
    const newComment = {
      text: this.state.comment,
      username: 'rustyshackleford'
     };
    this.setState({comments: [...this.state.comments, newComment],
    comment: ''
    });
  }

render() {
  return (
    <div className="comment">
       {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
      <CommentForm newComment={this.state.comment} submit={this.addNewComment} change={this.changeHandler}/>
    </div>
  );
}
}
export default CommentSection;