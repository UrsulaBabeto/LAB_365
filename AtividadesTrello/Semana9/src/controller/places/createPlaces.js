const Place = require("../../model/place");

const createPLaces = async (req, res) => {
    try {
      const place = await {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        openingHours: req.body.openingHours,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      };
   
      Place.create(place);
      res.status(201).json(place);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Algo deu errado, tente novamente" });
    }
  };

  module.exports =createPLaces;
  