import express from "express";
import verificarToken from "../middlewares/auth.middleware.js";
import {crearPagina, obtenerPagina, actualizarPagina} from "../controllers/page.controller.js";

const ruta = express.Router();

ruta.post("/", verificarToken, crearPagina);//rutas protegidas
ruta.get("/", verificarToken, obtenerPagina);
ruta.put("/", verificarToken, actualizarPagina);

export default ruta;