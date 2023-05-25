const Doctor = require("../../model/doctor-model");

const findOneDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor)
      return res.status(404).json({ message: "Médico não encontrado" });

    res.status(200).json(doctor);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findOneDoctor;
