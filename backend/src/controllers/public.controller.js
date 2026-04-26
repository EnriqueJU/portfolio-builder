import User from "../models/user.js";
import Page from "../models/page.model.js";

export const obtenerPaginaPublica = async (req, res) => {       //pagina publica de un usuario
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });  //buscar usuario

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    const page = await Page.findOne({ user: user._id });//buscar pagina del usuario

    if (!page || !page.isPublic) {
      return res.status(403).json({
        message: "Página no pública"
      });
    }

    const seccionesVisibles = page.sections.filter(  //filtrar solo secciones visibles
      (section) => section.isVisible
    );

    res.json({
      username: user.username,
      logo: page.logo,
      theme: page.theme,
      sections: seccionesVisibles,
      projects: page.projects || []
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al obtener página pública"
    });
  }
};