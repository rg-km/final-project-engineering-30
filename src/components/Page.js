import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

const Page = () => {
  return (
    <div className="hero">
      <div className="foto-2">
        <div className="heading"></div>
      </div>

      <div className="content">
        <h1>Management Penyewaan Ruangan Belajar</h1>
        <p>RPB</p>
        <div>
          <Link to="/training" className="btn">
            Profile
          </Link>
          <Link to="/contact" className="btn btn-light">
            Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;