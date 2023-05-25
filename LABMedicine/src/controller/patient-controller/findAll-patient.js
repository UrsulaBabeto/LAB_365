const Patient = require("../../model/patient-model");

const findAllPatient = async (req, res) => {
  try {
    let patients;
    const queryFilter = req.query.status;
    const statusCode = [
      "EM_ATENDIMENTO",
      "AGUARDANDO_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO",
    ];

    if (!queryFilter) {
      patients = await Patient.findAll();
    } else {
      if (!statusCode.includes(queryFilter)) {
        return res.status(400).json({
            message:"Estes são os status aceitos: EM_ATENDIMENTO, AGUARDANDO_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO ",
          });
      }
      patients = await Patient.findAll({
        where: {
          status: queryFilter,
        },
      });
    }

    res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findAllPatient;
