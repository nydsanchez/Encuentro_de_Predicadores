const router = require("express").Router();

const postMeeting = require("../controllers/RegMeeting");
const regTicket = require("../controllers/RegTickets");
const regChurch = require("../controllers/RegChurch");

router.post("/evento", postMeeting);
router.post("/tickets", regTicket);
router.post("/congregaciones", regChurch);

module.exports = router;
