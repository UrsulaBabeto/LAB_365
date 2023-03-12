
 const verify = (req, res, next) => {
  const user = req.body;
  if (user.cargo === "lider") {
    next();
  } else {
    res.status(406).json({ mensagem: "Acesso não autorizado" });
  }
};

module.exports = { verify }; 
