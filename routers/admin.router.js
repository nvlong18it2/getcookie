var express = require('express');

var adminController = require("../controllers/admin.controller");

var router = express.Router();

router.get("/", adminController.index)
router.get("/staff", adminController.staff)
router.post("/staff/add", adminController.addStaff)
router.post("/staff/edit", adminController.editStaff)
router.get("/delete/:table/:id", adminController.delete)

// router.get("/rooms/:id" , adminController.room_id)
// router.get("/book/:id" , adminController.bookingView)
// router.post("/create", adminController.creatUser)


module.exports = router;