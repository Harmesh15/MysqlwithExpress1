
const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/add",studentController.addUserEntries);
router.get("/",studentController.getAlluser);

router.post("/addBus",studentController.addBusEntries)
router.get("/buses/available/:seats/:id",studentController.getBusSeatStatus);
          


module.exports = router;