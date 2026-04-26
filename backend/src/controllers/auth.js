import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registro = async (req, res) => {                   //------REGISTRO------
    try {
        const {username, email, password} = req.body;

        const passwordHashed = await bcrypt.hash(password, 10); //contraseña encriptada
        
        const usuario = new User({                           //creo usuario
            username,
            email,
            password: passwordHashed
        });

        await usuario.save();

        res.status(200).json({
            message: "Usuario creado correctamente"
        });

    } catch (error) {
        res.status(500).json({ message: "Error en el registro", error });
    }
};

export const login = async (req, res) => {                      //------LOGIN------
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");//Busca el usuario con la contraseña

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password); //Comparamos contraseña

    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(     //Generamos token
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login correcto",
      token,
      username: user.username
    });

  } catch (error) {
    res.status(500).json({ message: "Error en login", error });
  }
};