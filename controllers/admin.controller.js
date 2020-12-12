var NhanVien = require("../models/nhanvien.model.js");
var SanPham = require("../models/sanpham.model.js");

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
                res.render('admin/layout', {
                    title: 'Admin | Staff',
                    page: "staff",
                    nhanVien: nhanVien,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },

    addStaff: (req, res) => {
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
    },

    editStaff: (req, res) =>{
        var id = req.body.edit
        delete req.body.edit;
        NhanVien.updateOne({ _id: id}, req.body, (err, result) =>{
            if(err) throw err;
            if (result.ok == 1) {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            } else {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            }
            res.redirect("/admin/staff");
        })
    },
    products: (req, res) => {
        SanPham.find({})
            .then((sanPham) => {
                res.render('admin/layout', {
                    title: 'Admin | SanPham',
                    page: "products",
                    sanPham: sanPham,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },

    addProducts: (req, res) => {
        new SanPham(req.body).save().then((sanPham) =>{
            if(sanPham) {
                res.cookie('thongBao', "Thêm Thành Công", {
                    signed: true
                });
                res.redirect("/admin/products");
            }
        }).catch((err) => {
            res.cookie('thongBao', "Thêm Thất Bại", {
                signed: true
            });
            res.redirect("/admin/products");
        });
    },

    editProducts: (req, res) =>{
        var id = req.body.edit
        delete req.body.edit;
        SanPham.updateOne({ _id: id}, req.body, (err, result) =>{
            if(err) throw err;
            if (result.ok == 1) {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            } else {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            }
            res.redirect("/admin/products");
        })
    },

    delete: (req, res) => {
        var table = req.params.table;
        var id = req.params.id;
        switch (table) {
            case "NhanVien":
                NhanVien.deleteOne({ _id: id }, (err,result) => {
                    if (err) throw err;
                    if (result.ok == 1) {
                        res.cookie('thongBao', "Xóa Thành Công", {
                            signed: true
                        });
                    } else {
                        res.cookie('thongBao', "Xóa Thành Công", {
                            signed: true
                        });
                    }
                    res.redirect("/admin/staff");    
                });
                
                case "SanPham":
                    SanPham.deleteOne({ _id: id }, (err,result) => {
                        if (err) throw err;
                        if (result.ok == 1) {
                            res.cookie('thongBao', "Xóa Thành Công", {
                                signed: true
                            });
                        } else {
                            res.cookie('thongBao', "Xóa Thành Công", {
                                signed: true
                            });
                        }
                        res.redirect("/admin/sanpham");    
                    });
                    break;
        }
    },

}