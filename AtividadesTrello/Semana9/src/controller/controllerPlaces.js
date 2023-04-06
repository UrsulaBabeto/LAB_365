const Place = require("../model/place.js");

/* const main = async (req, res) => {
  await res.status(200).json({ message: "server on" });
};
 */

const create = async (req, res) => {
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
    res.status(200).json(place);
  } catch (error) {
    res.status(400).json({ message: "Algo deu errado, tente novamente" });
  }
};


const AllFind = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(400).json({ message: "Não há dados no Banco de Dados" });
  }
};

const update = async (req, res) => {
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
    res.status(400).json({ message: "Não foi possivel fazer a alteração" });
  }
};


const deleted = async (req, res) => {
  try {
    await Place.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!req.params.id)
      return res.status(406).json({ message: "ID nao encontrado" });

    res.status(204).json();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Não foi possivel excluir o dado solicitado" });
  }
};

module.exports = {
  deleted,
  update,
  create,
  AllFind,
  //main,
};
