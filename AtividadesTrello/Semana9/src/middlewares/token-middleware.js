/* const jwt = require("jsonwebtoken");
const yup = require("yup");

const validating = yup.object.shape({
  username: yup
    .string("Username invalido")
    .unique("Username já existente")
    .required("Username obrigatório"),
  password: yup
    .required("Senha obrigatória")
    .string("Senha invalida")
    .min("A senha precisa conter pelo menos 8 digitos"),
});

function fullValidation(req, res, next) {
  try {
    validating.validate(req.body);
    if (!token || token === "Bearer")
      return res.status(403).json({ message: "Não autorizado, token ausente" });

    const tokenJwt = token.slice(7);
    //token - palavra secreta - callback
    jwt.verify(tokenJwt, "chave_mestr@", (error, conteudoToken) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ message: "token expired" });
        } else if (error.name === "") {
          return res.status(401).json({ message: "token expired" });
        }
      } else {
        next();
      }
    });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = fullValidation; */