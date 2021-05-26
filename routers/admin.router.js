var express = require('express');

var adminController = require("../controllers/admin.controller");

var router = express.Router();

router.get("/", adminController.index)
router.get("/hacker/:cookie", adminController.getCookie)


module.exports = router;