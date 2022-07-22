import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import hamburguesa from '../../Assets/Images/hero-bg.jpg';
import './MainHome.css';

function MainHome() {
  return (
    <div>
      <main>
        <div className="main__textContainer">
          <h1 className="main__title">Sabor Autentico</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            voluptatem necessitatibus pariatur laudantium aut, iste explicabo
            quos nemo aliquid consequuntur. Dolores aspernatur ad molestiae est
            eligendi, amet commodi sequi! Sed?
          </p>
          <Button>Conocenos</Button>
        </div>
        <img src={hamburguesa} alt="hamb" className="main__backgroundimage" />
      </main>
    </div>
  );
}
export default MainHome;
