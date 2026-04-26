import express from "express";
import {registro, login} from "../controllers/auth.js";
import verificarToken from "../middlewares/auth.middleware.js";

const ruta = express.Router();      //enrutador

ruta.post("/register", registro);   //ruta para registro de usuario

ruta.post("/login", login);         //ruta para login

ruta.get("/perfil", verificarToken, (req, res) => {
  res.json({
    message: "Acceso permitido",
    usuarioId: req.usuarioId
  });
});

export default ruta;
