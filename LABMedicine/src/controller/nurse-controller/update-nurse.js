const Nurse = require("../../model/nurse-model");

const updateNurse = async (req, res) => {
  try {
    const nurseDb = await Nurse.findByPk({ where: { id: req.params.id } });
    if (!nurseDb) {
      return res.status(404).json({ message: "Enfermeiro não encontrado" });
    }
          nurseDb.full_name=req.body.full_name || nurseDb.full_name,
          nurseDb.gender=req.body.gender,
          nurseDb.birth_date=req.body.birth_date || nurseDb.birth_date,
          nurseDb.cpf=req.body.cpf || nurseDb.cpf,
          nurseDb.phone_number= req.body.phone_number,
          nurseDb.college=req.body.college || nurseDb.college,
          nurseDb.coren_uf=req.body.coren_uf || nurseDb.coren_uf 
          
    const nurseUpdated = await Nurse.save(nurseDb);
    res.status(200).json(nurseUpdated);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = updateNurse;
