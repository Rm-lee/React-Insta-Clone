import React from 'react';

const CommentForm = props => {
 return (
  <form onSubmit={props.submit}>
  <input
      className="input"
      type="text"
      value={props.newComment}
      onChange={props.change}
      placeholder="comment"
      
   />
   <button type="submit">Comment</button>
  </form>
 );
}

export default CommentForm;