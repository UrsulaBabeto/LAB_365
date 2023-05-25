const Doctor = require("../../model/doctor-model");

const findAllDoctors = async (req, res) => {
  try {
    let doctor;
    const queryFilter = req.query.system_status;
    const statusCode = ["ATIVO", "INATIVO"];

    if (!queryFilter) {
      doctor = await Doctor.findAll();
    } else {
      if (statusCode.includes(queryFilter)) {
        doctor = await Doctor.findAll({
          where: {
            system_status: queryFilter,
          },
        });
      } else {
        res.status(400).json({
           message: "Informe o status do medico:'ATIVO' , 'INATIVO'"
        });
      }
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = findAllDoctors;
