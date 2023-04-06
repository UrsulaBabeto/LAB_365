const yup = require("yup");

const validating = yup.object().shape({
  fullName: yup
  .string("Nome invalido")
  .required("Nome completo é obrigatório"),
  email: yup.string("email invalido").email()
  .required("E-mail obrigatório"),
  username: yup
  .string()
  .required("Username obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha precisa conter pelo menos 8 digitos"),
});

function userValidation(req, res, next) {
  try {
    validating.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = userValidation;
