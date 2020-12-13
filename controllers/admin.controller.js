var NhanVien = require("../models/nhanvien.model.js");
var SanPham = require("../models/sanpham.model.js");
var NhaCungCap = require("../models/nhacungcap.model.js");
var Kho = require("../models/kho.model.js");
var User = require("../models/user.model.js");
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
        new NhanVien(req.body).save().then((nhanVien) => {
            if (nhanVien) {
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

    editStaff: (req, res) => {
        var id = req.body.edit
        delete req.body.edit;
        NhanVien.updateOne({
            _id: id
        }, req.body, (err, result) => {
            if (err) throw err;
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
        new SanPham(req.body).save().then((sanPham) => {
            if (sanPham) {
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

    editProducts: (req, res) => {
        var id = req.body.edit
        delete req.body.edit;
        SanPham.updateOne({
            _id: id
        }, req.body, (err, result) => {
            if (err) throw err;
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
    suppliers: (req, res) => {
        NhaCungCap.find({})
            .then((nhaCungCap) => {
                res.render('admin/layout', {
                    title: 'Admin | NhaCungCap',
                    page: "suppliers",
                    nhaCungCap: nhaCungCap,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },
    addSuppliers: (req, res) => {
        new NhaCungCap(req.body).save().then((nhaCungCap) =>{
            if(nhaCungCap) {
                res.cookie('thongBao', "Thêm Thành Công", {
                    signed: true
                });
                res.redirect("/admin/suppliers");
            }
        }).catch((err) => {
            res.cookie('thongBao', "Thêm Thất Bại", {
                signed: true
            });
            res.redirect("/admin/suppliers");
        });
    },

    editSuppliers: (req, res) =>{
        var id = req.body.edit
        delete req.body.edit;
        NhaCungCap.updateOne({ _id: id}, req.body, (err, result) =>{
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
            res.redirect("/admin/suppliers");
        })
    },
    warehouse: (req, res) => {
        Kho.find({})
            .then((kho) => {
                res.render('admin/layout', {
                    title: 'Admin | Kho',
                    page: "warehouse",
                    kho: kho,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },
    addWarehouse: (req, res) => {
        new Kho(req.body).save().then((kho) =>{
            if(kho) {
                res.cookie('thongBao', "Thêm Thành Công", {
                    signed: true
                });
                res.redirect("/admin/warehouse");
            }
        }).catch((err) => {
            res.cookie('thongBao', "Thêm Thất Bại", {
                signed: true
            });
            res.redirect("/admin/warehouse");
        });
    },

    editWarehouse: (req, res) =>{
        var id = req.body.edit
        delete req.body.edit;
        Kho.updateOne({ _id: id}, req.body, (err, result) =>{
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
            res.redirect("/admin/warehouse");
        })
    },

    user: (req, res) => {
        User.find({})
            .then((User) => {
                res.render('admin/layout', {
                    title: 'Admin | User',
                    page: "user",
                    User: User,
                    thongBao: res.locals.thongBao,
                })
            }).catch(err => console.log(err));
    },

    addUser: (req, res) => {
        new User(req.body).save().then((user) => {
            if (user) {
                res.cookie('thongBao', "Thêm Thành Công", {
                    signed: true
                });
                res.redirect("/admin/user");
            }
        }).catch((err) => {
            res.cookie('thongBao', "Thêm Thất Bại", {
                signed: true
            });
            res.redirect("/admin/user");
        });
    },

    editUser: (req, res) => {
        var id = req.body.edit
        delete req.body.edit;
        User.updateOne({ _id: id }, req.body, (err, result) => {
            if (err) throw err;
            if (result.ok == 1) {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            } else {
                res.cookie('thongBao', "Sửa Thành Công", {
                    signed: true
                });
            }
            res.redirect("/admin/user");
        })
    },
    
    delete: (req, res) => {
        var table = req.params.table;
        var id = req.params.id;
        switch (table) {
            case "NhanVien":
                NhanVien.deleteOne({
                    _id: id
                }, (err, result) => {
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
                break
                
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
                    res.redirect("/admin/products");    
                });
                break;

            case "NhaCungCap":
                NhaCungCap.deleteOne({ _id: id }, (err,result) => {
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
                    res.redirect("/admin/suppliers");    
                });
                break;

            case "Kho":
                Kho.deleteOne({ _id: id }, (err,result) => {
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
                    res.redirect("/admin/warehouse");    
                });
                break;

            case "User":
                User.deleteOne({ _id: id }, (err, result) => {
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
                     res.redirect("/admin/user");
                });
                break;
        }
    },

}