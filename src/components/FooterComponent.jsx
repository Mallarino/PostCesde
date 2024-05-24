// Importa el componente de comentarios correctamente
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Comment from './CommetComponent'; // Importa el componente de comentarios
import './Footer.css';

const PostFooter = () => {
  const [commentText, setCommentText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0); // Estado para almacenar el número de likes

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    const newComment = { profileImage: 'https://via.placeholder.com/50', userName: 'Usuario', commentText: commentText };
    setComments([...comments, newComment]); // Agrega el nuevo comentario al array de comentarios
    setCommentText('');
    setShowCommentInput(false);
  };

  const handleLike = () => {
    setLikes(likes + 1); // Incrementa el número de likes
  };

  return (
    <div className="post-footer mt-2">
      <div className="row align-items-center">
        <div className="col">
          {/* Botones de Me gusta, Comentar y Compartir */}
          <button className="btn btn-light btn-sm" onClick={handleLike}>
            <FontAwesomeIcon icon={faThumbsUp} /> Me gusta {likes}
          </button>
          <button className="btn btn-light btn-sm" onClick={() => setShowCommentInput(true)}>
            <FontAwesomeIcon icon={faComment} /> Comentar
          </button>
          <button className="btn btn-light btn-sm">
            <FontAwesomeIcon icon={faShare} /> Compartir
          </button>
        </div>
      </div>
      {/* Input y botón de enviar comentario */}
      {showCommentInput && (
        <div className="row align-items-center mt-2">
          <div className="col">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              value={commentText}
              onChange={handleCommentChange}
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary btn-sm" onClick={handleCommentSubmit}>
            <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
      {/* Lista de comentarios */}
      {comments.length > 0 && (
        <div className="row mt-2">
          <div className="col">
            {comments.map((comment, index) => (
              <Comment key={index} profileImage={comment.profileImage} userName={comment.userName} commentText={comment.commentText} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFooter;