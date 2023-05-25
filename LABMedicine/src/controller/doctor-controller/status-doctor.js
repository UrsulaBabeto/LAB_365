const Doctor = require("../../model/doctor-model");

const statusDoctor = async (req, res) => {
  try {
    const statusCode = ["ATIVO", "INATIVO"];
    const statusBody = req.body.system_status.toUpperCase()
    const statusDb = await Doctor.findByPk(req.params.id);

    if (!statusDb) {
      return res.status(404).json({ message: "Medico não encontrado" });
    }
    if (statusDb.system_status) {
      if (!statusCode.includes(statusBody)) {
        return res.status(400).json({
          message: "Informe o status do medico:'ATIVO' , 'INATIVO'"
        });
      }
      statusDb.system_status = statusBody;

      const statusUpdated = await statusDb.save();
      res.status(200).json({ atualização_de_status: statusUpdated });
    }
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = statusDoctor;
