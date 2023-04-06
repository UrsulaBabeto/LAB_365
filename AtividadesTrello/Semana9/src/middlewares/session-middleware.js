const yup = require("yup");

const validating = yup.object().shape({
    username: yup
      .string("Username invalido")
      .required("Username obrigatório"),
    password: yup
      .string("Senha invalida")
      .required("Senha obrigatória")
      .min(8,"A senha precisa conter pelo menos 8 digitos"),
  });

  function sessionValidation(req, res, next) {
    try {
      validating.validateSync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  module.exports = sessionValidation;