// App.jsx
import React from 'react';
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  return (
    <div className="app-container">
      <Header title="Adopta un perrito" />

      <div className="card-container">
        <MyCard
          imageSrc="./src/assets/imgs/perro1.jpg"
          name="Saul Goodman"
          description="Astuto y simpático, perfecto para quienes buscan un amigo leal."
          tags={{ text: 'Adoptame!', bgColor: 'success' }}
        />

        <MyCard
          imageSrc="./src/assets/imgs/perro2.jpg"
          name="Jesse Pinkman"
          description="En busca de amor y aventuras, con ojos expresivos y un corazón rebelde."
          tags={{ text: 'Adoptame!', bgColor: 'primary' }}
        />

        <MyCard
          imageSrc="./src/assets/imgs/perro3.jpg"
          name="Walter White"
          description="Inteligente y dedicado, listo para ser el compañero fiel en tu vida."
          tags={{ text: 'Adoptame!', bgColor: 'danger' }}
        />

        <MyCard
          imageSrc="./src/assets/imgs/perro4.jpg"
          name="Gustavo Fring"
          description="Elegante y reservado, ideal para aquellos que buscan una presencia imponente."
          tags={{ text: 'Adoptame!', bgColor: 'warning' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
