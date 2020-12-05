var NhanVien = require("../models/nhanvien.model.js");

module.exports = {
    index: (req, res) => {
        res.render('admin/layout', {
            title: 'Admin | Home',
            page: "index",
        })
    }, 

    staff: (req, res) => {
        NhanVien.find({})
            .then((nhanVien) => {
                console.log(nhanVien);
                res.render('admin/layout', {
                    title: 'Admin | Staff',
                    page: "staff",
                    nhanVien: nhanVien,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },

    addStaff: (req, res) => {
        console.log(req.body);
        new NhanVien(req.body).save().then((nhanVien) =>{
            if(nhanVien) {
                res.cookie('thongBao', "Thêm Thành Công", {
                    signed: true
                });
                res.redirect("/admin/staff");
            }
        }).catch((err) => {
            res.cookie('thongBao', "Thêm Thất Bại", {
                signed: true
            });
            res.redirect("/admin/staff");
        });
    }
}