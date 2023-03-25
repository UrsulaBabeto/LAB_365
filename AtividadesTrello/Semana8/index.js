(async () => {
  const database = require("./db.js");
  const user = require("./cadastro.js");
  await database.sync();

  const newUser = await user.create({
    firstName: "Ursula",
    lastName: "Babeto",
    cpf: "12345678909",
    adress: "Rua Mundo de Bob,365",
    phoneNumber: "999999999",
  });
  console.log(newUser)
})();
