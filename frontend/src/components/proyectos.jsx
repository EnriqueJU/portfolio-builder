import { useState } from "react";
import "./proyectos.css";
import { API_URL } from "../config";
import { useEffect } from "react";



function Proyectos({ pagina }) {
  const token = localStorage.getItem("token");
  const [proyectos, setProyectos] = useState(pagina?.projects || []);
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [mostrarModalCrear, setMostrarModalCrear] = useState(false);

  useEffect(() => {
  setProyectos(pagina?.projects || []);
  }, [pagina]);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    title: "",
    description: "",
    image: "",
    link: ""
  });

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

    const res = await fetch(`${API_URL}/api/page`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();
    setProyectos(data.projects);
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

    const res = await fetch(`${API_URL}/api/page`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();
    setProyectos(data.projects);
  };

  return (
    <section className="proyectos">
      <div className="proyectos-header">
        <h2 className="titulo-seccion">Proyectos</h2>

        {token && (
          <button 
            className="btn-principal"
            onClick={() => setMostrarModalCrear(true)}
          >
            + Añadir proyecto
          </button>
        )}
      </div>

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
              className="btn-eliminar"
              onClick={(e) => {
                e.stopPropagation();
                eliminarProyecto(index);
              }}
            >
              X
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

      {mostrarModalCrear && (
        <div 
          className="modal-overlay"
          onClick={() => setMostrarModalCrear(false)}
        >
        <div 
          className="modal crear-modal"
          onClick={(e) => e.stopPropagation()}
        >

        <h3>Nuevo proyecto</h3>

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

      <button
        className="btn-principal"
        onClick={async () => {
          await crearProyecto();
          setMostrarModalCrear(false);
        }}
      >
        Crear
      </button>

    </div>
  </div>
)}

    </section>
  );
}

export default Proyectos;