const Nurse = require("../../model/nurse-model");

const deleteNurse = async (req, res) => {
  try {
   const idNurse = await Nurse.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!idNurse)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = deleteNurse;
