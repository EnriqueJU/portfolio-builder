import mongoose from "mongoose";

// Definimos el esquema del usuario
const userSchema = new mongoose.Schema({

    username: {         // Nombre de usuario único
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    email: {            // Correo electrónico único
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {         // Contraseña encriptada
      type: String,
      required: true,
      minlength: 6,
      select: false     // para que no se devuelva automáticamente
    }
  },
  {
    timestamps: true    // crea createdAt automáticamente
  }
);

export default mongoose.model("User", userSchema);