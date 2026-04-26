import { useState } from "react";
import "./proyectos.css";
import { API_URL } from "../config";

function Proyectos({ pagina }) {
  const token = localStorage.getItem("token");
  const [proyectoActivo, setProyectoActivo] = useState(null);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    title: "",
    description: "",
    image: "",
    link: ""
  });

  const proyectos = pagina?.projects || [];

  // 🟢 CREAR
  const crearProyecto = async () => {
    const token = localStorage.getItem("token");
    const nuevosProyectos = [...proyectos, nuevoProyecto];

    await fetch(`${API_URL}/api/page`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        projects: nuevosProyectos
      })
    });

    window.location.reload();
  };

  // 🔴 ELIMINAR
  const eliminarProyecto = async (index) => {
    const token = localStorage.getItem("token");

    const nuevosProyectos = proyectos.filter((_, i) => i !== index);

    await fetch(`${API_URL}/api/page`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        projects: nuevosProyectos
      })
    });

    window.location.reload();
  };

  return (
    <section className="proyectos">

      <h2 className="titulo-seccion">Proyectos</h2>

      {/* 🟢 FORMULARIO */}
      {token && (
      <div className="form-proyecto">

        <input
          placeholder="Título"
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, title: e.target.value })
          }
        />

        <input
          placeholder="Descripción"
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, description: e.target.value })
          }
        />

        <input
          placeholder="Imagen URL"
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, image: e.target.value })
          }
        />

        <input
          placeholder="Link"
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, link: e.target.value })
          }
        />

        <button onClick={crearProyecto}>
          Añadir proyecto
        </button>

      </div>
      )}

      {/* 🟢 GRID */}
      <div className="grid-proyectos">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="tarjeta-proyecto"
            onClick={() => setProyectoActivo(proyecto)}
          >
            <img
              src={
                proyecto.image?.startsWith("http")
                  ? proyecto.image
                  : "https://picsum.photos/300"
              }
              alt={proyecto.title}
            />

            {/* 🔴 BOTÓN ELIMINAR */}
            {token && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                eliminarProyecto(index);
              }}
            >
              ❌
            </button>
            )}
          </div>
        ))}
      </div>

      {/* 🟣 MODAL */}
      {proyectoActivo && (
        <div
          className="modal-overlay"
          onClick={() => setProyectoActivo(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-imagen">
              <img src={proyectoActivo.image} alt="" />
            </div>

            <div className="modal-contenido">
              <h3>{proyectoActivo.title}</h3>
              <p>{proyectoActivo.description}</p>

              <a href={proyectoActivo.link} target="_blank">
                Ver proyecto
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Proyectos;