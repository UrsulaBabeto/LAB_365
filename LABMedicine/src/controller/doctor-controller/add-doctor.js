const Doctor = require("../../model/doctor-model");

const addDoctor = async (req, res) => {
  try {
    if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });
    const doctorDb = await Doctor.findOne({ where: { cpf: req.body.cpf } });
    if (doctorDb) return res.status(409).json({ message: "CPF já cadastrado" });
 
    const doctor = await {
      full_name: req.body.full_name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      cpf: req.body.cpf,
      phone_number: req.body.phone_number,
      college: req.body.college,
      crm: req.body.crm,
      specialization: req.body.specialization,
      system_status: req.body.system_status
    };

    const newDoctor = await Doctor.create(doctor);
    const { id,status, ...rest } = newDoctor.toJSON();

    res.status(201).json({identificador: id, atendimentos: status, doctor:rest });

  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};


module.exports = addDoctor;
