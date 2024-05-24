import React from 'react';
import './Comment.css';

const Comment = ({ profileImage, userName, commentText }) => (
  <div className="comment d-flex align-items-start mt-2">
    <img src={profileImage} alt="Profile" className="profile-image rounded-circle me-2" />
    <div className="comment-content">
      <h6 className="mb-1">{userName}</h6>
      <p className="mb-0">{commentText}</p>
    </div>
  </div>
);

export default Comment;
