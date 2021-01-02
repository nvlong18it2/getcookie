var db = require('mongoose');
var SanPham = db.model('sanphams', {
    ten: String,
    giaSanPham: Number,
	donVi: String,
    kichThuoc: String,
    chungLoai: String,
    cuongDoChiuNen: String,
    trongLuong: String,
    maSanPham: String,
    tieuChuan: String,
    chatLieu: String,
    doRong: String,
    hutNuoc: String,
    mauSac: String,
    xuatXu: String,
});

module.exports = SanPham;