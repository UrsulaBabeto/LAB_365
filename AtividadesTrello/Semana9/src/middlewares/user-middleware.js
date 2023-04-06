const yup = require("yup");

const validating = yup.object.shape({
  fullName: yup
  .string("Nome invalido")
  .required("Nome completo é obrigatório"),
  email: yup
    .email("Email invalido")
    .unique("Email já existente")
    .required("E-mail obrigatório"),
  username: yup
    .string("Username invalido")
    .unique("Username já existente")
    .required("Username obrigatório"),
  password: yup
    .required("Senha obrigatória")
    .string("Senha invalida")
    .min("A senha precisa conter pelo menos 8 digitos"),
});

function userValidation(req, res, next) {
  try {
    validating.validate(req.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = userValidation;