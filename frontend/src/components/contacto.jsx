import "./contacto.css";

function Contacto({ pagina }) {
  return (
    <section id="contacto" className="contacto">

      <h2 className="titulo-seccion">Contacto</h2>

      <p className="contacto-texto">
        {pagina?.contactText || "Puedes contactarme a través de los siguientes medios"}
      </p>

      <div className="contacto-links">

        {pagina?.email && (
          <a href={`mailto:${pagina.email}`}>
            Email
          </a>
        )}

        {pagina?.linkedin && (
          <a href={pagina.linkedin} target="_blank">
            LinkedIn
          </a>
        )}

        {pagina?.github && (
          <a href={pagina.github} target="_blank">
            GitHub
          </a>
        )}

      </div>

    </section>
  );
}

export default Contacto;