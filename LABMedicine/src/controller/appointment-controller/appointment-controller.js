const Appointment = require("../../model/appointment-model");
const Doctor = require("../../model/doctor-model");
const Patient = require("../../model/patient-model");

const appointment = async (req, res) => {
  try {
    const newAppointment = {
      patientId: req.body.patientId,
      doctorId: req.body.doctorId,
    };
    if (!newAppointment.patientId || !newAppointment.doctorId)
      return res.status(400).json({ message: "IDs obrigatórios" });

    const appointment = await Appointment.create(newAppointment);

    const doctor = await Doctor.findByPk(newAppointment.doctorId);
    const patient = await Patient.findByPk(newAppointment.patientId);

    if (!doctor || !patient)
      return res.status(404).json({ message: "IDs não encontrados" });

    patient.status = "ATENDIDO";
    patient.total_appointment = patient.total_appointment + 1;
    doctor.total_appointment = doctor.total_appointment + 1;

    await patient.save();
    await doctor.save();
    res.status(200).json(appointment);
  } catch (error) {
    console.log(error);
     res.status(500).json({ message: "Erro de Servidor " });
  }
};

module.exports = appointment;
