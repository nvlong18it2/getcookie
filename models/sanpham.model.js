var db = require('mongoose');
var SanPham = db.model('sanphams', {
	ten: String, 
	donVi: String, 
    nhaPhanPhoi: Date, 
    soLuong: Number, 
    donGia: Number, 
    soLuongNhap: Number, 
    soLuongTon: String, 
    ngayNhap: Date, 
});

module.exports = SanPham;