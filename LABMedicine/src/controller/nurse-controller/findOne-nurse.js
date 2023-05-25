const Nurse = require("../../model/nurse-model");

const findOneNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const nurse = await Nurse.findByPk(id);
    if (!nurse)
      return res.status(404).json({ message: "Enfermeiro não encontrado" });

    res.status(200).json(nurse);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findOneNurse;
