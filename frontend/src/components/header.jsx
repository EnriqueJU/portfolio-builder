import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ pagina }) {
  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo-container">
        {pagina.logo ? (
          <img src={pagina.logo} alt="logo" className="logo-img" />
        ) : (
          <div className="logo-placeholder"></div>
        )}
      </div>

      {/* NAV */}
      <nav className="nav">
        <a href="#inicio">Conóceme</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* BOTONES */}
      <div className="auth">
        <Link to="/login">
          <button className="btn-secundario">Login</button>
        </Link>
        <button className="btn-primario">Registro</button>
      </div>

    </header>
  );
}

export default Header;