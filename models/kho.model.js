var db = require('mongoose');
var Kho = db.model('kho', {
    id_sanPham: String,
    soLuong: Number,
    soLuongNhap: Number,
    soLuongTon: Number,
    donGia: Number, 
    ngayNhap: Date,

});

module.exports = Kho;