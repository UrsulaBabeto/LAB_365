const yup = require("yup");

const validating = yup.object().shape({
     name:yup
    .string().required("Nome obrigatório"),
    phoneNumber:yup
    .string().required("Numero de telefone obrigatório"),
    latitude:yup
    .number().required("Campo obrigatório"),
    longitude:yup
    .number().required("Campo obrigatório") 
    
});


function placeValidation(req,res,next){
    try {
      validating.validateSync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
module.exports = placeValidation; 