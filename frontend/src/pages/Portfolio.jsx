import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { temaPorDefecto } from "../Tema.js";
import { API_URL } from "../config";
import Header from "../components/header";
import Hero from "../components/hero";
import Secciones from "../components/secciones";
import Proyectos from "../components/proyectos";
import Contacto from "../components/contacto";
import Footer from "../components/footer";

function Portfolio() {
  const { username } = useParams(); // 👈 clave
  const [pagina, setPagina] = useState(null);
  

  useEffect(() => {
    fetch(`${API_URL}/api/public/${username}`)
      .then(res => res.json())
      .then(data => setPagina(data));
  }, [username]);

  const tema = pagina?.theme || temaPorDefecto;

  if (!pagina) return <p>Cargando...</p>;

  return (
    <div className="app"
    style={{
    backgroundColor: tema.background,
    color: tema.text
    }}>
      <Header pagina={pagina} />
      <Hero pagina={pagina} />
      <Secciones pagina={pagina} />
      <Proyectos pagina={pagina} />
      <Contacto />
      <Footer pagina={pagina} />
    </div>
  );
}

export default Portfolio;