import "./footer.css";

function Footer({ pagina }) {
  return (
    <footer className="footer">

      {/* IDENTIDAD */}
      <h3>{pagina?.heroTitle || "Usuario"}</h3>

      {/* TEXTO */}
      <p className="footer-texto">
        {pagina?.footerText || "Gracias por visitar mi portfolio"}
      </p>

      {/* LINKS */}
      <div className="footer-links">

        {pagina?.email && (
          <a href={`mailto:${pagina.email}`}>Email</a>
        )}

        {pagina?.linkedin && (
          <a href={pagina.linkedin} target="_blank">LinkedIn</a>
        )}

        {pagina?.github && (
          <a href={pagina.github} target="_blank">GitHub</a>
        )}

      </div>

      {/* COPYRIGHT */}
      <p className="footer-copy">
        © {new Date().getFullYear()}
      </p>

    </footer>
  );
}

export default Footer;