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
  deleteChurch,
} = require("../controllers/Church");

const {
  postPeople,
  getAllPeople,
  getPerson,
  editPerson,
  postPersonWithTicket,
} = require("../controllers/People");

//Gestión de Iglesias
router.post("/churches", postChurch);
router.get("/churches", getAllChurches);
router.put("/churches/:id", editChurch);
router.get("/churches/id", editChurch);
router.delete("/churches/:id", deleteChurch);

//Gestión de Personas
router.post("/people", postPeople);
router.post("/person-ticket", postPersonWithTicket);
router.get("/people", getAllPeople);
router.get("/people/id", getPerson);
router.put("/people/:id", editPerson);

//Gestión de Tickets
router.get("/tickets/id", getTicketById);
router.get("/tickets", getAllTickets);
router.post("/tickets", regTicket);
router.put("/tickets/id", updateTicket);
router.put("/asistencia/id", registerAttendance);

module.exports = router;
