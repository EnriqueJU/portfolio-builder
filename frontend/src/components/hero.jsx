import "./hero.css";

function Hero({ pagina }) {
  return (
    <section id="inicio" className="hero">

      {/* TEXTO */}
      <div className="hero-texto">
        <h1>{pagina.heroTitle || "Tu nombre aquí"}</h1>

        <p>
          {pagina.heroSubtitle || "Descripción breve del usuario"}
        </p>
      </div>

      {/* IMAGEN */}
      <div className="hero-imagen">
        {pagina.logo && (
          <img src={pagina.logo} alt="logo" />
        )}
      </div>

    </section>
  );
}

export default Hero;