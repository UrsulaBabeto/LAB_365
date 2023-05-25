const Patient = require("../../model/patient-model");

const updatePatient = async (req, res) => {
  try {
    const patientDb = await Patient.findByPk(req.params.id);
    if (!patientDb) {
      return res.status(404).json({ message: "Paciente não encontrado" });
    }

          patientDb.full_name = req.body.full_name || patientDb.full_name;
          patientDb.gender = req.body.gender;
          patientDb.birth_date = req.body.birth_date || patientDb.birth_date;
          patientDb.cpf=req.body.cpf || patientDb.cpf,
          patientDb.phone_number = req.body.phone_number;
          patientDb.emergency_phone = req.body.emergency_phone || patientDb.emergency_phone;
          patientDb.allergies = req.body.allergies;
          patientDb.special_care = req.body.special_care;
          patientDb.health_insurance = req.body.health_insurance;
          patientDb.status = req.body.status;

    const patientUpdated = await patientDb.save();
    res.status(200).json(patientUpdated);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = updatePatient;
