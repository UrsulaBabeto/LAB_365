const Nurse = require("../../model/nurse-model");

const findAllNurse = async (req, res) => {
  try {

    const nurses = await Nurse.findAll();
    
    res.status(200).json(nurses);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findAllNurse;
