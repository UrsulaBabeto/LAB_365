# LABMedicine -Api para Clinicas Médicas 

> API Rest criado com funcionalidades básicas e essenciais (MVP) para
> o gerenciamento e automação nos atendimentos de algumas entidades
> relacionais do setor clínico - pacientes, enfermeiros e médicos.
> Projeto criado com Javascript, Express, Yup e Sequelize

<a href="https://app.swaggerhub.com/apis/URSULACOBABETO/Api_LabMedicine/1.0.0" target="_blank"><img src="https://img.shields.io/badge/{···}-Swagger-<white>" target="_blank"></a>

## Tecnologias

|     | Dependências   | Descrição                                                                                                                 |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Dotenv]       | Cria e armazena vaiáveis de ambiente tornando a aplicação mais segura e dinâmica                                          |
| 2   | [Node]         | Biblioteca que "interpreta" o Javasccript para p back-end                                                                 |
| 3   | [Express]      | Framework robusto que, atrelado ao node, fornece recursos para a criação de rotas HTTP e middlewares                      |
| 4   | [Yup]          | Elaborador de estrutura de validações que simplifica a lógica da criação das validações do projeto                        |
| 5   | [Sequelize]    | ORM que conecta e abstrai os comandos de operações do SQL possibilitando a utilização em outras linguagens de programação |
| 6   | [pg/pg-hstore] | Interpretadores do PostgresSQL que faz a comunicação entre banco de dados e aplicação                                     |

|     | Dependências-DEV | Descrição                                                            |
| --- | ---------------- | -------------------------------------------------------------------- |
| 1   | [Nodemon]        | Monitora o sistema de arquivos e reinicia o processo automaticamente |

## Técnicas

_A api foi separada em arquivos e pastas que facilitam a leitura, reutilização e teste de cada componente:_
_Arquivos na rota main:_

- **index:** arquivo que faz a conexão e execução de toda a aplicação;
- **.env:** variáveis de ambiente;
- **.env.example:** declara quais são e permite um possível consumidor da api de settar as variáveis de ambiente de acordo com as suas especificidades;
- **.gitignore:** "esconde" arquivo sensíveis de publicação indesejada;

_A pasta **"src"** contém todas as subpastas abaixo:_

- **connection:** contém o arquivo que faz a conexão com o banco de dados;
- **controller:** possui uma subpasta para cada entidade com suas respectivas regras de negócio;
- **middleware:** possui um arquivo entidade com suas respectivas validações;
- **model:** os modelos das entidades criadas no banco de dados (tables);
- **routes:** possui um arquivo para cada entidade que redireciona para cada rota do arquivo e transporta todos eles para a página principal (index);

## Rodando o projeto

Abra o seu terminal de preferência e digite:

```sh
-git clone
```

-settar variáveis de ambiente

```sh
-npm install
-npm start
```

\*caso necessário, acesse a documentação disponibilizada para cada tecnologia utilizada no projeto e faça a sua instalação manualmente.
Verifique o arquivo package.json,.O projeto deve conter todas as tecnologias citadas acima

## Rotas e funcionalidades

### **Add-Doctor**

Esta rota tem por função adicionar um novo medico no banco de dados e retorna o id, status de atendimento e todos os demais dados referentes ao cadastro

```sh
const addDoctor = async (req, res) => {
const doctor = await {
    full_name: req.body.full_name,
             ....
    }
const newDoctor = await Doctor.create(doctor);
const { id,status, ...rest } = newDoctor.toJSON();

res.status(201).json({IDentificador: 'id', atendimentos: status, doctor:rest });
    }
```

Os objetos que serão recebidos na requisição têm os seguintes atributos:

- **full_name**(string, obrigatório): O nome completo do medico
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string, unique, required): O número do CPF
- **phone_number** (string, required): Número de telefone
- **college** (string, required): Instituição de ensino
- **crm** (string, required): Número do CRM
- **specialization** (string, required): Tipo de formação/função
- **system_status** (string, required): Se ele está ativo ou não no sistema do hospital

O cpf é um dado único e obrigatório, para garantir sua exclusividade, existe a verificação

```sh
     const doctorDb = await Doctor.findOne({
         where: {
            cpf: req.body.cpf
            }
        });
    if (doctorDb) return res.status(409).json({ message: "CPF ja cadastrado" });

    if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });
```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **Delete-Doctor**

Esta rota tem por função deletar um médico ja cadastrado no banco de dados.

A exclusão é realizada baseado no ID passado na rota

```sh
(req, res) => {
  try {
    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindAll-Doctor**

Esta rota tem por função retornar todos os dados de todos os médicos cadastrados no banco de dados

```sh
async (req, res) => {
  try {
    let doctor;
    const queryFilter = req.query.system_status;
 if (!queryFilter) {
      doctor = await Doctor.findAll();
    }
}
```

A rota também prevê a possibilidade de encontrar todos os médicos que estão ou não ativos no sistema

```sh
  const statusCode = ["ATIVO", "INATIVO"];
  else {
      if (statusCode.includes(queryFilter)) {
        doctor = await Doctor.findAll({
          where: {
            system_status: queryFilter,
          },
        });
      }
```

Para um valor invalido no status, o retorno 400(Informe o status do médico) aparece

```sh
else {
        res.status(400).json({
           message: "Informe o status do médico: ‘ATIVO’, ‘INATIVO’"
        });
      }

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindOne-Doctor**

Esta rota tem por função retornar os dados de um único medico cadastrado no banco de dados

```sh
async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
     res.status(200).json(doctor);
}
```

Se o id do médico é invalido ou inexistente, o retorno 404(Médico não encontrado) aparece

```sh
 if (!doctor)
      return res.status(404).json({ message: "Médico não encontrado" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Status-Doctor**

Esta rota tem por função modificar o status do médico, sempre que necessário. Como o status é um ENUM, a requisição é validada como uppercase para evitar erros de validação

```sh
async (req, res) => {
  try {
    const statusCode = ["ATIVO", "INATIVO"];
    const statusBody = req.body.system_status.toUpperCase()
    const statusDb = await Doctor.findByPk(req.params.id);

    statusDb.system_status = statusBody;

    const statusUpdated = await statusDb.save();
    res.status(200).json({ atualização_de_status: statusUpdated });
    }
```

Se o id do médico é inválido ou inexistente, o retorno 404(Médico não encontrado) aparece

```sh
if (!statusDb) {
      return res.status(404).json({ message: "Medico não encontrado" });
    });

```

Se o status do médico é inválido, o retorno 400(Informe o status do médico) aparece

```sh
if (statusDb.system_status) {
      if (!statusCode.includes(statusBody)) {
        return res.status(400).json({
          message: "Informe o status do médico: ‘ATIVO’, ‘INATIVO’"
        });
      }

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Update-Doctor**

Esta rota tem por função modificar os de um médico, sempre que necessário de acordo com seu ID.

```sh
async (req, res) => {
  try {
    const { id } = req.params;
    const doctorDb = await Doctor.findByPk(id);
     const doctorUpdated = await doctorDb.save();
    res.status(200).json(doctorUpdated);
    }
```

Se o id do médico é invalido ou inexistente, o retorno 404(Médico não encontrado) aparece

```sh
 if (!doctorDb)
      return res.status(404).json({ message: "Médico não encontrado" });

```

O objeto a ser atualizado possui os seguintes atributos que podem receber um novo valor e/ou receber os dados já existente no banco de dados:

- **full_name**(string, obrigatório): O nome completo do medico
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string, unique, required): O número do CPF
- **phone_number** (string, required): Número de telefone
- **college** (string, required): Instituição de ensino
- **crm** (string, required): Número do CRM
- **specialization** (string, required): Tipo de formação/função
- **system_status** (string, required): Se ele está ativo ou não no sistema do hospital
- **total_attendance** (number, required): Número total de atendimentos

```sh
ex.:
doctorDb.full_name= req.body.full_name  || doctorDb.full_name,
doctorDb.gender= req.body.gender,
```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Add-Nurse**

Esta rota tem por função adicionar um novo enfermeiro no banco de dados. Retorna o id, status de atendimento e todos os demais dados referentes ao cadastro

```sh
 const nurse = await {
      full_name: req.body.full_name,
    ....
    };
    const newNurse = await Nurse.create(nurse);
    const { id, ...rest } = newNurse.toJSON();

    res.status(201).json({identificador: id, Nurse:rest });
```

Os objetos que serão recebidos na requisição têm os seguintes atributos:

- **full_name**(string, obrigatório): O nome completo do enfermeiro
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string, unique, required): O número do CPF
- **phone_number** (string, required): Número de telefone
- **college** (string, required): Instituição de ensino
- **coren_uf** (string, required): Número do coren_uf

O cpf é um dado único e obrigatório, para garantir sua exclusividade, existe a verificação

```sh
     const nurseDb = await Nurse.findOne({
        where: {
             cpf: req.body.cpf
             }
        });
    if (nurseDb) return res.status(409).json({ message: "CPF ja cadastrado" });

    if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **Delete-Nurse**

Esta rota tem por função deletar um enfermeiro ja cadastrado no banco de dados.

A exclusão é realizada baseado no ID passado na rota

```sh
(req, res) => {
  try {
    await Nurse.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindAll-Nurse**

Esta rota tem por função retornar todos os dados de todos os enfermeiros cadastrados no banco de dados

```sh
async (req, res) => {
  try {
    const nurses = await Nurse.findAll();
    res.status(200).json(nurses);
```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindOne-Nurse**

Esta rota tem por função retornar todos os dados de um único enfermeiro cadastrado no banco de dados

```sh
 async (req, res) => {
  try {
    const { id } = req.params;
    const nurse = await Nurse.findByPk(id);

    res.status(200).json(nurse);
}
```

Se o id do enfermeiro é invalido ou inexistente, o retorno 404(Enfermeiro não encontrado) aparece

```sh
 if (!nurse)
      return res.status(404).json({ message: "Enfermeiro não encontrado" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Update-Nurse**

Esta rota tem por função modificar os dados de um enfermeiro, sempre que necessário de acordo com seu ID.

```sh
async (req, res) => {
  try {
    const nurseDb = await Nurse.findByPk({
        where: {
             id: req.params.id
             }
        });

    const nurseUpdated = await Nurse.save(nurseDb);
    res.status(200).json(nurseUpdated);

```

Se o id do enfermeiro é invalido ou inexistente, o retorno 404(Enfermeiro não encontrado) aparece

```sh
 if (!nurseDb) {
      return res.status(404).json({ message: "Enfermeiro não encontrado" });
    }

```

O objeto a ser atualizado possui os seguintes atributos que podem receber um novo valor e/ou receber os dados já existente no banco de dados:

- **full_name**(string, obrigatório): O nome completo do enfermeiro
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string, unique, required): O número do CPF
- **phone_number** (string, required): Número de telefone
- **college** (string, required): Instituição de ensino
- **coren_uf** (string, required): Número do coren_uf

```sh
ex.:
    nurseDb.cpf=req.body.cpf || nurseDb.cpf,
    nurseDb.phone_number= req.body.phone_number,
```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Add-Patient**

Esta rota tem por função adicionar um novo paciente no banco de dados e retorna o id, status de atendimento e todos os demais dados referentes ao cadastro

```sh
async (req, res) => {
const patient = await {
    full_name: req.body.full_name,
             ....
    }
  const newPatient = await Patient.create(patient);
    const { id,status, ...rest } = newPatient.toJSON();

    res.status(201).json({identificador: id, atendimentos: status, patient:rest });
  }
}
```

Os objetos que serão recebidos na requisição têm os seguintes atributos:

- **full_name**(string, obrigatório): O nome completo do medico
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string, unique, required): O número do CPF
- **phone_number** (string, required): Número de telefone
- **emergency_phone** (string, required): Contato de emergência
- **allergies** (string, required): Lista de possíveis alergias
- **special_care** (string, required): Necessidade de cuidados especiais
- **health_insurance** (string, required): convênio médico
- **status** (number, required):status no sistema [ EM_ATENDIMENTO","AGUARDANDO_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"]

O cpf é um dado único e obrigatório, para garantir sua exclusividade, existe a verificação

```sh
        const patientDb = await Patient.findOne({
        where: {
          cpf: req.body.cpf,
        },
      });

      if (patientDb) return res.status(409).json({ message: "CPF ja cadastrado" });

      if(!req.body.cpf) return  res.status(400).json({ message: "CPF obrigatório" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **Delete-Patient**

Esta rota tem por função deletar um paciente ja cadastrado no banco de dados.

A exclusão é realizada baseado no ID passado na rota

```sh
(req, res) => {
  try {
    await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id)
      return res.status(404).json({ message: "ID não encontrado" });

    res.status(204).json();

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindAll-Patient**

Esta rota tem por função retornar todos os dados de todos os pacientes cadastrados no banco de dados

```sh
async (req, res) => {
  try {
    let patients;
    const queryFilter = req.query.status;
    const statusCode = [
      "EM_ATENDIMENTO",
      "AGUARDANDO_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO",
    ];

    if (!queryFilter) {
      patients = await Patient.findAll();
    }
      res.status(200).json(patients);
```

A rota também prevê a possibilidade de encontrar todos os pacientes de acordo com o seu status de atendimento

```sh
  patients = await Patient.findAll({
        where: {
          status: queryFilter,
        },
      });
    }

```

Para valores invalidos no status, o retorno 400(Estes são os status aceitos....) aparece

```sh
else {
      if (!statusCode.includes(queryFilter)) {
        return res.status(400).json({
            message:"Estes são os status aceitos: EM_ATENDIMENTO, AGUARDANDO_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO ",
          });
      }

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
};
```

### **FindOne-Patient**

Esta rota tem por função retornar todos os dados de um único paciente cadastrado no banco de dados de acordo com o seu ID

```sh
 async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);

     res.status(200).json(patient);
}
```

Se o id do paciente é invalido ou inexistente, o retorno 404(Paciente não encontrado) aparece

```sh
 if (!patient)
      return res.status(404).json({ message: "Paciente não encontrado" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Status-Patient**

Esta rota tem por função modificar o status do paciente, sempre que necessário. Como o status é um ENUM, a requisição é validada como uppercase para evitar erros de validação

```sh
async (req, res) => {
  try {
    const statusCode = [
      "EM_ATENDIMENTO",
      "AGUARDANDO_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO",
    ];

    const statusBody = req.body.status.toUpperCase()

    const statusDb = await Patient.findByPk(req.params.id);

    statusDb.system_status = statusBody;

    statusDb.status = statusBody;
    const statusUpdated = await statusDb.save();
    res.status(200).json({ atualização_de_status: statusUpdated });
    }
```

Se o id do paciente é inválido ou inexistente, o retorno 404(Paciente não encontrado) aparece

```sh
if (!statusDb) {
      return res.status(404).json({ message: "Paciente não encontrado" });
    });

```

Se o status do paciente é inválido, o retorno 400(Informe o status do paciente) aparece

```sh
   if (statusDb.status) {
      if (!statusCode.includes(statusBody)) {
        return res.status(400).json({
          message:
            "Estes são os status aceitos: EM_ATENDIMENTO, AGUARDANDO_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO ",
        });
      }

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Update-Patient**

Esta rota tem por função modificar os de um paciente, sempre que necessário de acordo com seu ID.

```sh
 async (req, res) => {
  try {
    const patientDb = await Patient.findByPk(req.params.id);
     const patientUpdated = await patientDb.save();
    res.status(200).json(patientUpdated);
    }
```

Se o id do paciente é invalido ou inexistente, o retorno 404(Paciente não encontrado) aparece

```sh
  if (!patientDb) {
      return res.status(404).json({ message: "Paciente não encontrado" });
    }

```

O objeto a ser atualizado possui os seguintes atributos que podem receber um novo valor e/ou receber os dados já existente no banco de dados:

- **full_name**(string, obrigatório): O nome completo do medico
- **gender** (string, required): O gênero.
- **birth_date** (string, required):data de nascimento no formato ("YYYY-MM-DD").
- **cpf** (string): O número do CPF
- **phone_number** (string, required): Número de telefone
- **emergency_phone** (string, required): Contato de emergência
- **allergies** (string, required): Lista de possíveis alergias
- **special_care** (string, required): Necessidade de cuidados especiais
- **health_insurance** (string, required): convênio médico
- **status** (number, required):status no sistema [ EM_ATENDIMENTO","AGUARDANDO_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"]

```sh
ex.:
patientDb.emergency_phone = req.body.emergency_phone || patientDb.emergency_phone;
patientDb.allergies = req.body.allergies;
```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Appointment**

Esta rota tem por finalidade criar um vinculo entre medico/paciente.
Atualiza e soma ao total de consultas realizadas pelo medico e ao total de consultas atendidas pelo paciente

```sh
 const newAppointment = {
      patientId: req.body.patientId,
      doctorId: req.body.doctorId,
    };


    const appointment = await Appointment.create(newAppointment);

    const doctor = await Doctor.findByPk(newAppointment.doctorId);
    const patient = await Patient.findByPk(newAppointment.patientId);


    patient.status = "ATENDIDO";
    patient.total_appointment = patient.total_appointment + 1;
    doctor.total_appointment = doctor.total_appointment + 1;

    await patient.save();
    await doctor.save();
    res.status(200).json(appointment);
```
 Caso o usuario não insira os dados ou coloque dados invalidos o seguinte erro é retornado:
```sh
  if (!doctor || !patient)
      return res.status(404).json({ message: "IDs não encontrados" });
  if (!newAppointment)
      return res.status(400).json({ message: "IDs obrigatórios" });

```

Caso a função encontre um erro, o retorno 500(Erro de servidor) aparece

```sh
catch (error) {
   return res.status(500).json({message: "Erro de Servidor"});
}
```

### **Model**

Estas rotas têm por finalidade criar tabelas no banco de dados de acordo com a especificidade da entidade desejada.

\*A tabela abaixo serve para fins ilustrativos da sintaxe utilizada na criação das demais tabelas do projeto

```sh
 const { Sequelize } = require("sequelize");
const connection = require("../connection/connection.js");

const Person = connection.define("person", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: Sequelize.STRING,
  gender: Sequelize.STRING,
  birth_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true
  },
  phone_number: Sequelize.STRING,
});

module.exports = Person;
```

### **Middleware**

Estas rotas têm por finalidade inspecionar e filtrar requisições HTTP recebidas pela aplicação e melhorar o nivel de interação/segurança da informação.

\*A tabela abaixo serve para fins ilustrativos da sintaxe utilizada na criação das demais tabelas do projeto

```sh
const yup = require("yup");

const schema = yup.object().shape({
  full_name: yup.string().required("Nome completo obrigatório"),
  birth_date: yup.date("Verifique o tipo de entrada, este campo requer uma data")
});

const patientSecure = (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = patientSecure;
```

### **Routes**

Criada com o intuito de facilitar e organizar a manutenção e verificação dos códigos
\*A tabela abaixo serve para fins ilustrativos da sintaxe utilizada na criação das demais tabelas do projeto

```sh
const express = require('express');
const appointment = require('../controller/appointment-controller/appointment-controller');

const route = express.Router();

route.put("/api/atendimentos",  appointment);

module.exports = route;
```

### **Connection**

Conexão com o database utilizando variáveis de ambiente

```sh
const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: process.env.DIALECT_DB,
  host: process.env.HOST_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  port: process.env.PORT_DB,
});

module.exports = connection;

```

### **Index**

Main Page, faz a importa e conecta todas as pastas e arquivos. Possibilita a realização das operações

```sh
require("dotenv").config();

const express = require("express");

const connection = require("./src/connection/connection");
const routePatient = require("./src/routes/patient-routes");
const routeNurse = require("./src/routes/nurse-routes");
const routeDoctor = require("./src/routes/doctor-routes");
const routeAppoitment = require("./src/routes/appointment-routes");

const app = express();
app.use(express.json());

app.use(routePatient, routeDoctor, routeNurse, routeAppoitment);

connection.sync({ alter: true });

app.listen(process.env.PORT_URL, () => console.log("server on"));

```

## Melhorias

- Atrelar o setor de enfermagem com paciente e medico;
- Criar um sistema de agendamento (com datas) de consultas/procedimentos;

## Contatos:

<div>
<a href="https://www.instagram.com/ursulababeto/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
<a href = "mailto:ursulacobabeto@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ursula-babeto/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>   
</div>

[dotenv]: https://www.npmjs.com/package/dotenv
[node]: https://nodejs.org/dist/latest-v18.x/docs/api/
[express]: https://expressjs.com/
[yup]: https://www.jsdocs.io/package/yup
[sequelize]: https://sequelize.org/docs/v6/getting-started/
[pg/pg-hstore]: https://sequelize.org/docs/v6/getting-started/
[nodemon]: https://nodemon.io
