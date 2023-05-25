const Nurse = require("../../model/nurse-model");

const addNurse = async (req, res) => {
  try {
    if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });
    const nurseDb = await Nurse.findOne({ where: { cpf: req.body.cpf } });
    if (nurseDb) return res.status(409).json({ message: "CPF já cadastrado" });
    const nurse = await {
      full_name: req.body.full_name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      cpf: req.body.cpf,
      phone_number: req.body.phone_number,
      college: req.body.college,
      coren_uf: req.body.coren_uf,
    };
    const newNurse = await Nurse.create(nurse);
    const { id, ...rest } = newNurse.toJSON();

    res.status(201).json({identificador: id, Nurse:rest });

  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = addNurse;

