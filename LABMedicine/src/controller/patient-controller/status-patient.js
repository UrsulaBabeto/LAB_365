const Patient = require("../../model/patient-model");

const statusPatient = async (req, res) => {
  try {
    const statusCode = [
      "EM_ATENDIMENTO",
      "AGUARDANDO_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO",
    ];
    
    const statusBody = req.body.status.toUpperCase()
   
    const statusDb = await Patient.findByPk(req.params.id);
    if (!statusDb) {
      return res.status(404).json({ message: "Paciente não encontrado" });
    }
    if (statusDb.status) {
      if (!statusCode.includes(statusBody)) {
        return res.status(400).json({
          message:
            "Estes são os status aceitos: EM_ATENDIMENTO, AGUARDANDO_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO ",
        });
      }
      statusDb.status = statusBody;
      const statusUpdated = await statusDb.save();
      res.status(200).json({ atualização_de_status: statusUpdated });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = statusPatient;
