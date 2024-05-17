const router = require("express").Router();

const {
  postTicket,
  getTickets,
  updateTicket,
} = require("../controllers/Ticket");
const { getChurches, postChurch } = require("../controllers/Church");

const {
  postPeople,
  getPeople,
  updatePerson,
} = require("../controllers/People");

router.post("/tickets", postTicket);
router.post("/churches", postChurch);
router.post("/people", postPeople);

router.get("/churches", getChurches);

module.exports = router;
