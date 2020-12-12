const express = require('express')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts');
var morgan = require('morgan')
var cookieParser = require('cookie-parser');
var adminRouter = require('./routers/admin.router')
var loginRouter = require('./routers/login.router')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
var http = require('http').createServer(app);
// var io = require('./socket.io/socket.io.js')(http);

app.use(cookieParser("anhkhoa"))

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(morgan("dev"))
app.use("/assets", express.static(__dirname + "/public"));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use("/admin", check ,adminRouter);
app.use("/login", notification ,loginRouter);

app.use(bodyParser.json())

http.listen(port, () => console.log(`App listening at http://localhost:${port}`));

mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Connect DB Success"))
	.catch((err) => console.error(err));

// app.get("/", hControle.index);
function check (req, res, next) {
    if (!req.signedCookies.user) {
        res.redirect('/login');
        return;
    }
    res.locals.user = req.signedCookies.user;
    if (req.signedCookies.thongBao != undefined) {
        res.locals.thongBao = req.signedCookies.thongBao;
        res.clearCookie("thongBao");
    }
    next();
}
function notification (req, res, next) {
    res.locals.user = req.signedCookies.user;
    if (req.signedCookies.thongBao != undefined) {
        res.locals.thongBao = req.signedCookies.thongBao;
        res.clearCookie("thongBao");
    }
    next();
}