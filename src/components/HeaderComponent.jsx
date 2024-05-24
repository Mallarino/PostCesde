import React from 'react';
import './Header.css';

const PostHeader = ({ profileImage, userName, postDate }) => (
  <div className="post-header d-flex align-items-center">
    <img src={profileImage} className="profile-image rounded-circle me-2" />
    <div>
      <h6 className="mb-0">{userName}</h6>
      <small className="text-muted">{postDate}</small>
    </div>
  </div>
);

export default PostHeader;
