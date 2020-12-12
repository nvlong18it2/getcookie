var NhanVien = require("../models/nhanvien.model.js");

module.exports = {
    index: (req, res) => {
        res.render("login/layout",{
            title: "Sign in",
            page: "index",
            thongBao: res.locals.thongBao,
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
            NhanVien.findOne({taiKhoan: taiKhoan, matKhau: matKhau},(err, result) => {
                if (err) throw err;
                if (result != null) {
                    res.cookie('user', result.ten, {
                        signed: true
                    });
                    res.cookie('roles', 1, {
                        signed: true
                    });
                    res.redirect('/admin')
                } else {
                    res.cookie('thongBao', "Tài Khoản hoặc mật khẩu không đúng", {
                        signed: true
                    });
                    res.redirect('/login')
                }                
            })
        }
    } 
}