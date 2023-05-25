const Patient = require("../../model/patient-model");

const deletePatient = async (req, res) => {
  try {
   const idPatient = await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!idPatient)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = deletePatient;
