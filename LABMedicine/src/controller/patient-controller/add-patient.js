const Patient = require("../../model/patient-model");

const addPatient = async (req, res) => {
  try {
    if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });
    const patientDb = await Patient.findOne({
        where: {
          cpf: req.body.cpf,
        },
      });
  
      if (patientDb) return res.status(409).json({ message: "CPF já cadastrado" });

    const patient = await {
      full_name: req.body.full_name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      cpf: req.body.cpf,
      phone_number: req.body.phone_number,
      emergency_phone: req.body.emergency_phone,
      allergies: req.body.allergies,
      special_care: req.body.special_care,
      health_insurance: req.body.health_insurance,
      status: req.body.status,
    };
    const newPatient = await Patient.create(patient);
    const { id,status, ...rest } = newPatient.toJSON();

    res.status(201).json({identificador: id, atendimentos: status, patient:rest });
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = addPatient;

