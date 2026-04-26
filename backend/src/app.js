import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import pageRoutes from "./routes/page.routes.js";
import publicRoutes from "./routes/public.routes.js";

const app = express(); //creo la aplicacion

app.use(cors()); //permite o bloquea comunicaciones

app.use(helmet());//seguridad cabeceras http

app.use(morgan("dev")); //logs de peticiones

app.use(express.json());//procesar JSON en las peticiones

app.use("/api/auth", authRoutes);//rutas de autenticación

app.use("/api/page", pageRoutes);

app.use("/api/public", publicRoutes);//rutas publicas

export default app;// exporta la app para index.js