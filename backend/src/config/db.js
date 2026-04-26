import mongoose from "mongoose"; //para coenctar con mongodb

const conectarDB = async () => {//funcion para conectar la base de datos
    try {
        await mongoose.connect(process.env.MONGO_URI);//intento de conexion usando la url de entorno
        console.log("MongoDB conectado");//confirmacion

    } catch (error) {
        console.error("Error al conectar", error);//mensaje de error
        process.exit(1);//cierro el proceso
    }
};

export default conectarDB;//exporto para usarlo en el index.js