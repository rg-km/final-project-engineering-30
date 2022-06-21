import React from "react";
import "./RoomsStyles.css";

import { Link } from "react-router-dom";

import foto3 from "../assets/foto3.png";
import foto2 from "../assets/foto2.jpg";
import foto4 from "../assets/foto4.jpeg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";
import foto7 from "../assets/foto7.jpg";

const Rooms = () => {
  return (
    <div className="training">
      <div className="left">
        <div className="image-stack top">
          <img src={foto2} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 1</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="image-stack bottom">
          <img src={foto3} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 2</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="image-stack bottom">
          <img src={foto4} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 3</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="image-stack bottom">
          <img src={foto5} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 4</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="image-stack bottom">
          <img src={foto6} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 5</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="image-stack bottom">
          <img src={foto7} className="img room-2" alt="" />
        </div>
        <div className="roki">
          <h1>Ruang belajar 6</h1>
          <p>Ruang belajar ini sangat bersih dan rapih</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;