import express from "express";
import { obtenerPaginaPublica } from "../controllers/public.controller.js";

const ruta = express.Router();

ruta.get("/:username", obtenerPaginaPublica); //ruta publica

export default ruta;