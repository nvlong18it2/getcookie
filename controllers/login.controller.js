var NhanVien = require("../models/nhanvien.model.js");

module.exports = {
    index: (req, res) => {
        res.render("login/layout",{
            title: "Sign in",
            page: "index",
        })
    },

    signIn: (req, res) => {
        var taiKhoan = req.body.taiKhoan;
        var matKhau = req.body.matKhau;
        if (taiKhoan == "admin" && matKhau == "123") {
            res.cookie('user', taiKhoan, {
                signed: true
            });
            res.cookie('roles', 0, {
                signed: true
            });
            res.redirect('/admin')
        } else {
            
        }
    } 
}