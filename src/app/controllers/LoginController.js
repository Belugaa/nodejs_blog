const Account = require('../modles/acconut');

class loginCotroller {
    index(req, res, next) {
        res.render('login');
    }

    dangnhap(req, res, next) {
        var nameAcc = req.body.nameAcc;
        var passAcc = req.body.passAcc;

        Account.findOne({
            nameAcc: nameAcc,
            passAcc: passAcc,
        })
            .then((data) => {
                if (data) {
                    res.json('Đăng nhập thành công');
                } else {
                    res.json('Đăng nhập thất bại, vui lòng thử lại');
                }
            })
            .catch((err) => {
                res.status(400).json('Có lỗi xảy ra');
            });
    }
}

module.exports = new loginCotroller();
