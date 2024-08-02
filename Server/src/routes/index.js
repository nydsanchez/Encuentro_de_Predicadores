const router = require("express").Router();

const {
  regTicket,
  getAllTickets,
  registerAttendance,
  getTicket,
  updateTicket,
  getTicketById,
} = require("../controllers/Ticket");

const {
  getAllChurches,
  postChurch,
  editChurch,
} = require("../controllers/Church");

const {
  postPeople,
  getAllPeople,
  getPerson,
  editPerson,
  postPersonWithTicket,
} = require("../controllers/People");

//Gestión de Iglesias
router.post("/church", postChurch);
router.get("/churches", getAllChurches);
router.put("/churches/:id", editChurch);
router.get("/church/id", editChurch);

//Gestión de Personas
router.post("/person", postPeople);
router.post("/person-ticket", postPersonWithTicket);
router.get("/people", getAllPeople);
router.get("/people/id", getPerson);
router.put("/people/:id", editPerson);

//Gestión de Tickets
router.get("/ticket/id", getTicketById);
router.get("/tickets", getAllTickets);
router.post("/ticket", regTicket);
router.put("/ticket/id", updateTicket);
router.put("/asistencia/id", registerAttendance);

module.exports = router;
