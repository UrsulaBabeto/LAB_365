const Place = require("../../model/place");

const updatePlaces = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!req.params.id)
        return res.status(406).json({ message: "ID nao encontrado" });
  
      const {
        name,
        phoneNumber,
        openingHours,
        description,
        latitude,
        longitude,
      } = req.body;
  
      const info = await Place.findByPk(id);
  
      info.name = name;
      info.phoneNumber = phoneNumber;
      info.openingHours = openingHours;
      info.description = description;
      info.latitude = latitude;
      info.longitude = longitude;
     
     const placeInfo = await info.save()
      res.status(200).json(placeInfo);
    } catch (error) {
      res.status(500).json({ message: "Não foi possivel fazer a alteração" });
    }
  };

  module.exports = updatePlaces;