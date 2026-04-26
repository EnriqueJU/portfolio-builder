import Page from "../models/page.model.js";

export const crearPagina = async (req, res) => {        //esto crea la pagina
  try {
    const pagina = new Page({
      user: req.usuarioId
    });

    await pagina.save();

    res.status(201).json(pagina);

  } catch (error) {
    res.status(500).json({ message: "Error al crear página" });
  }
};

export const obtenerPagina = async (req, res) => {      //obtener pagina de un usuario
  try {
    const pagina = await Page.findOne({ user: req.usuarioId });

    res.json(pagina);

  } catch (error) {
    res.status(500).json({ message: "Error al obtener página" });
  }
};

export const actualizarPagina = async (req, res) => {       //actualizar página
  try {
    const pagina = await Page.findOneAndUpdate(
      { user: req.usuarioId },
      req.body,
      { new: true }
    );

    res.json(pagina);

  } catch (error) {
    res.status(500).json({ message: "Error al actualizar página" });
  }
};