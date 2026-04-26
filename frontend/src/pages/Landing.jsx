import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landing-caja">
        <div className="landing-contenido">
          <h1 className="landing-titulo">Portfolio Builder</h1>

          <p className="landing-subtitulo">
            Crea tu portfolio profesional en minutos
          </p>

          <div className="landing-botones">
            <button className="btn-principal">Registro</button>
            <button className="btn-secundario">Login</button>
          </div>

          <p className="landing-demo">
            <Link to="/paco">Demo</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;