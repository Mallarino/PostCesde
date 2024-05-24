import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/PostComponent';
import './App.css';

const post = {
  profileImage: 'https://images.wsj.net/im-94357/?width=1280&size=1.33333333',
  userName: 'Mark Goosman',
  postDate: '2 hours ago',
  text: '¡Emirates aterriza en Colombia! Estamos emocionados de anunciar que Emirates Airlines ha inaugurado su ruta aérea hacia Colombia, conectando directamente a Bogotá con destinos globales de renombre. Esta nueva conexión aérea no solo acerca a Colombia al mundo, sino que también ofrece a los viajeros una experiencia de vuelo de lujo con la reconocida hospitalidad y comodidad que caracteriza a Emirates.',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/c3/emirates.jpg?w=1200&h=-1&s=1',
  comments: [
    {
      profileImage: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1',
      userName: 'Daniela paez',
      commentText: 'Ya era hora !!'
    },
    {
      profileImage: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1',
      userName: 'Juan jose',
      commentText: 'Genial !!'
    }
  ]
};

function App() {
  return (
    <div className="App container mt-5">
      <Post post={post} />
    </div>
  );
}

export default App;
