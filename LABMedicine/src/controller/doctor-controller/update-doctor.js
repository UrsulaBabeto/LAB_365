const Doctor = require("../../model/doctor-model");

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctorDb = await Doctor.findByPk(id);
    if (!doctorDb) return res.status(404).json({ message: "Médico não encontrado", identificador: id });

        doctorDb.full_name= req.body.full_name  || doctorDb.full_name,
        doctorDb.gender= req.body.gender,
        doctorDb.birth_date= req.body.birth_date || doctorDb.birth_date,
        doctorDb.cpf= req.body.cpf || doctorDb.cpf,
        doctorDb.phone_number= req.body.phone_number,
        doctorDb.college= req.body.college || doctorDb.college,
        doctorDb.crm= req.body.crm || doctorDb.crm,
        doctorDb.specialization= req.body.specialization || doctorDb.specialization,
        doctorDb.system_status= req.body.system_status || doctorDb.system_status 

    const doctorUpdated = await doctorDb.save();
    res.status(200).json(doctorUpdated);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = updateDoctor;
