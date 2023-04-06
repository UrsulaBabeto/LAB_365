const yup = require('yup');

const validation = yup.object.shape({
    name:yup
    .string("O nome deve ser uma string")
    .required("Nome obrigatório"),
    phoneNumber:yup
    .string()
    .required("Numero de telefone obrigatório"),
    latitude:yup
    .number("Somente numeros")
    .required("Campo obrigatório"),
    longitude:yup
    .number("Somente numeros")
    .required("Campo obrigatório")
});


function placeValidation(req,res,next){
   try {
    validation.validateSync(req.boby);
    next()
   } catch (error) {
    response.status(400).json({ message: error.message });
   }
   

    }
module.exports = placeValidation;