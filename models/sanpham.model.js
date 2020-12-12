var db = require('mongoose');
var SanPham = db.model('sanphams', {
	ten: String, 
    donVi: String, 
    nhaPhanPhoi: String,
    donGia: String,
    soLuong: String,
    soLuongNhap: String, 
    soLuongTon: String,
    ngayNhap: Date
 
});

module.exports = SanPham;