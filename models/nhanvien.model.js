var db = require('mongoose');
var NhanVien = db.model('nhanviens', {
	ten: String, 
	gioiTinh: String, 
    ngaySinh: Date, 
    cmnd: String, 
    queQuan: String, 
    sdt: String, 
    diaChi: String, 
    taiKhoan: String, 
    matKhau: String,  
});

module.exports = NhanVien;