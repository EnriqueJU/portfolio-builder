import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      console.log("LOGIN:", data);

      if (!data.token) {//comprobar credenciales
        alert("Credenciales incorrectas");
        return;
      }

      localStorage.setItem("token", data.token);//guardar token
  
      navigate(`/${data.username}`);//redirigir al usuario

    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

      <h2>Iniciar sesión</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn-principal" onClick={handleLogin}>
        Entrar
      </button>

    </div>
  </div>
  );
}

export default Login;