var express = require('express');

var loginController = require("../controllers/login.controller");

var router = express.Router();

router.get("/", loginController.index)
router.post("/", loginController.signIn)
// router.post("/", hControle.login)

// router.get("/logout", hControle.logout)
// router.get("/rooms" , hControle.roomAll)
// router.get("/rooms/:id" , hControle.room_id)
// router.get("/book/:id" , hControle.bookingView)
// router.post("/create", hControle.creatUser)


module.exports = router;