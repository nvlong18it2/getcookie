var db = require('mongoose');
var NhaCungCap = db.model('nhacungcaps', {
	ten: String, 
    ngayThamGia: Date, 
    nguoiDaiDien: String, 
    sanPhamChinh: String, 
    namThanhLap: String, 
    thiTruongChinh: String, 
    doanhThu: String, 
    diaChi: String,  
    loaiHinh: String,
});

module.exports = NhaCungCap;