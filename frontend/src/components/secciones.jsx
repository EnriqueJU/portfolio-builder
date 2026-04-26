import "./secciones.css";

function Secciones({ pagina }) {
  return (
    <section className="secciones">

      {pagina.sections
        ?.filter(seccion => seccion.isVisible)
        .map((seccion, index) => (
          <div className={`seccion ${index % 2 === 0 ? "" : "invertida"}`} key={index}>

            {/* TEXTO */}
            <div className="seccion-texto">
              <h2>{seccion.name}</h2>
              <p>{seccion.content}</p>
            </div>

            {/* IMAGEN OPCIONAL */}
            {seccion.image && (
              <div className="seccion-imagen">
                <img src={seccion.image} alt={seccion.name} />
              </div>
            )}

          </div>
        ))}

    </section>
  );
}

export default Secciones;