const Patient = require("../../model/patient-model");

const findOnePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);

    if (!patient)
      return res.status(404).json({ message: "Paciente não encontrado" });

    res.status(200).json(patient);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findOnePatient;


