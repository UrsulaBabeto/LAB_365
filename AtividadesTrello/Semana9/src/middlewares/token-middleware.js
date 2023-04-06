const jwt = require("jsonwebtoken");

function tokenValidation(req, res, next) {
  try {
    const token = req.headers.authorization;

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
    res.status(400).json({ message: "token invalid" });
  }
}

module.exports = tokenValidation;
