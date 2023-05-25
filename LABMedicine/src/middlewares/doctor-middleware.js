const yup = require("yup");

const schema = yup.object().shape({
  full_name: yup
    .string()
    .required("Nome completo obrigatório"),
  birth_date: yup
    .date("Verifique o tipo de entrada, este campo requer uma data")
    .required("Data de nascimento obrigatória"),
    cpf: yup.string(),
    college: yup
    .string()
    .required("Instituição de Ensino obrigatória"),
  crm: yup
    .string()
    .required("CRM obrigatório"),
  specialization: yup
    .string()
    .required("Informe sua profissão(especialidade)"),
  system_status: yup
    .string()
    .required("Informe se o médico esta ativo ou inativo"),
});

const doctorSecure = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = doctorSecure;
