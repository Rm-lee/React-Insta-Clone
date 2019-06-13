import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'
const PostContainer = props => {


 return (
 <div className="post-container"> 
  <div className="thumb">
    <img src={props.data.thumbnailUrl} alt="posters thumbnail"></img>
    <h2 className="user">{props.data.username}</h2>
  </div>
  <img src={props.data.imageUrl} alt="post"></img>
  {
   props.data.comments.map(comments => (
   <CommentSection data={comments} />
  ))
  }
  </div>
 );
}
export default PostContainer;