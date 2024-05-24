import React from 'react';
import PostHeader from './HeaderComponent';
import PostContent from './ContentComponent';
import PostFooter from './FooterComponent';
import Comment from './CommetComponent';
import './Post.css';

const Post = ({ post }) => (
  <div className="post-container card mb-4">
    <div className="card-body">
      <PostHeader profileImage={post.profileImage} userName={post.userName} postDate={post.postDate} />
      <PostContent text={post.text} image={post.image} />
      <PostFooter />
      {post.comments.map((comment, index) => (
        <Comment key={index} profileImage={comment.profileImage} userName={comment.userName} commentText={comment.commentText} />
      ))}
    </div>
  </div>
);

export default Post;