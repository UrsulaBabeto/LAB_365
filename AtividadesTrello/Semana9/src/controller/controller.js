const Place = require("../model/place.js");

const main = async (req, res) => {
  await res.status(200).json({ message: "server on" });
};

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
     if (!place.name) {
      return res.status(400).json({ message: "Nome obrigatório" });
    }
    if (!place.phoneNumber) {
      return res
        .status(400)
        .json({ message: "Numero de telefone obrigatório" });
    }
    if (!place.latitude || !place.longitude) {
      return res.status(400).json({ message: "Coordenadas obrigatório" });
    } 
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

const PKFind = async (req, res) => {
  try {
    const places = await Place.findByPk(req.body.id);
    res.status(200).json(places);
   
    if(!places.id){
      return res.status(400).json({ message: "ID invalido" })
    }
  } catch (error) {
    res.status(400).json({ message: "Este dado não consta no Banco de Dados" });
  }
};

const refresh = async (req, res) => {
  try {
    //const update = await Place.findByPk(req.body.id)
   //update.save()
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: "Não foi possivel fazer a alteração" });
  }
}; 

const erase = async (req, res) => {
  try {
    //const del = await Place.findByPk(req.body.id)
    //del.destroy()
    res.status(200).json(del);
  } catch (error) {
    res.status(400).json({ message: "Não foi possivel excluir o dado solicitado" });
  }
};

module.exports = {
  erase,
  refresh,
  create,
  AllFind,
  PKFind,
  main,
};
