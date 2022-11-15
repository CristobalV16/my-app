import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Fortnite from '../Images/FORT.png'
import Valo from '../Images/VALO.jpg'
import Cs from '../Images/CS.jpg'

import Login from "../Login";



function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src= {Cs}
            alt="Csgo"
        />
        <Carousel.Caption>
          <p>Counter-Strike: Global Offensive es un videojuego de disparos en primera persona.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {Fortnite}
          alt="Fortnite"
        />

        <Carousel.Caption>
          <p>Fortnite es un juego online de disparos en tercera persona .</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Valo}
          alt="Valorant"
        />

        <Carousel.Caption>
          <p>Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;


export const Inicio = () => {
  return (
    <div className="Inicio">
      <Login/>
      <Carrusel/>
    </div>
  )

}

