const jwt = require("jsonwebtoken");
/* 
1 - validar se existe token no header da aplicação
2- verificar se o token esta presente senao, erro
*/

function validateToken(req, res, next) {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;

  if (!token || token === "Bearer")
    return res.status(403).json({ message: "Não autorizado, token ausente" });

  const tokenJwt = token.slice(7);
  //token - palavra secreta - callback
  jwt.verify(tokenJwt, "Eotch@n", (error, conteudoToken) => {
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
}

module.exports = validateToken;
