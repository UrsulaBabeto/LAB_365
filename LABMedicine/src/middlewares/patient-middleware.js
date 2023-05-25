const yup = require("yup");

const schema = yup.object().shape({
  full_name: yup
     .string()
    .required("Nome completo obrigatório"),
    cpf: yup.string(),
    birth_date: yup
    .date("Verifique o tipo de entrada, este campo requer uma data")
    .required("Data de nascimento obrigatória"),
  emergency_phone: yup
    .string()
    .required("Por favor informe o contato de emergência"),
    status:yup
    .string()
    .required("Estes são os status aceitos: EM_ATENDIMENTO, AGUARDANDO_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO ")
});

const patientSecure = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = patientSecure;
