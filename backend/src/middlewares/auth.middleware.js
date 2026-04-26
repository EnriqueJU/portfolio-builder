import jwt from "jsonwebtoken";//verificar token

const verificarToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;//Obtenemos el token desde los headers

    if (!token) {//verificamos que el token exista
      return res.status(401).json({
        message: "Acceso denegado, token requerido"
      });
    }

    const tokenLimpio = token.replace("Bearer ", "");//eliminamos el Bearer

    const decoded = jwt.verify(tokenLimpio, process.env.JWT_SECRET);//verificamos el token con la clave secreta

    req.usuarioId = decoded.userId;//guardamos el id del usuario en la request

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
};

export default verificarToken;