import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'
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
   
     <CommentSection key={props.id} data={props.data.comments} />
    
   }
  </div>
 );
}
PostContainer.propTypes = {
 comments: PropTypes.arrayOf(PropTypes.string)
};
export default PostContainer;