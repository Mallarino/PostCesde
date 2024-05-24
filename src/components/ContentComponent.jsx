import React from 'react';
import './Content.css';

const PostContent = ({ text, image }) => (
  <div className="post-content">
    <p>{text}</p>
    {image && <img src={image} alt="Post" className="img-fluid mt-2" />}
  </div>
);

export default PostContent;
