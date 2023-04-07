const jwt = require("jsonwebtoken");

function tokenValidation(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token || token === "Bearer")
      return res.status(403).json({ message: "Não autorizado, token ausente" });

    const tokenJwt = token.slice(7);
                //token - palavra secreta - callback
    jwt.verify(tokenJwt, process.env.CHAVE_DO_TOKEN, (error, conteudoToken) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ message: "token expired" });
        } else if (error.name === "JsonWebTokenError") {
          return res.status(401).json({ message: "token expired" });
        }else{
          return res.status(500).json({message:"Internal server error"})
        }
      } else {
        req.body.userId = conteudoToken.id;
        next();
      }
    });
  } catch (error) {
    res.status(400).json({ message: "token invalid" });
  }
}

module.exports = tokenValidation;
