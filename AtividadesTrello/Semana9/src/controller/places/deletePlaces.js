const Place = require("../../model/place");

const deletePlaces = async (req, res) => {
  try {
    await Place.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!req.params.id)
      return res.status(406).json({ message: "ID nao encontrado" });

    res.status(204).json();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel excluir o dado solicitado" });
  }
};

module.exports = deletePlaces