import dotenv from "dotenv"; //dotenv para variables de entorno
import app from "./src/app.js" //app configurada
import conectarDB from "./src/config/db.js"; //conexion con DB

dotenv.config(); //cargo variables de entorno

conectarDB();

const port = process.env.port || 3000; //usa .env si existe

app.listen(port,() => {
    console.log(`http://localhost:${port}`); //inicio el servidor
});