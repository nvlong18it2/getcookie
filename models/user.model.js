var db = require('mongoose');
var User = db.model('users', {
	ten: String, 
    sdt: String, 
    ngaySinh: Date, 
    cmnd: String, 
    diaChi: String,
    taiKhoan: String, 
    matKhau: String,  
});

module.exports = User;