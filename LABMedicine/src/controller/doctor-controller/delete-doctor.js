const Doctor = require("../../model/doctor-model");

const deleteDoctor = async (req, res) => {
  try {
   const idDoctor = await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    if (!idDoctor)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = deleteDoctor;
