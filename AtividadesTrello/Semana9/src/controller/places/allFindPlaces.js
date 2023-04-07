const Place = require("../../model/place");


const allFindPlaces = async (req, res) => {
    try {
      const places = await Place.findAll({where:{
        user_id:req.body.userId
      }});
      res.status(200).json(places);
    } catch (error) {
      res.status(500).json({ message: "Não há dados no Banco de Dados" });
    }
  };

  module.exports = allFindPlaces;