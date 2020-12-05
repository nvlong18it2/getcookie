var express = require('express');

var adminController = require("../controllers/admin.controller");

var router = express.Router();

router.get("/", adminController.index)
router.get("/staff", adminController.staff)
router.post("/staff/add", adminController.addStaff)

// router.get("/logout", hControle.logout)
// router.get("/rooms" , hControle.roomAll)
// router.get("/rooms/:id" , hControle.room_id)
// router.get("/book/:id" , hControle.bookingView)
// router.post("/create", hControle.creatUser)


module.exports = router;