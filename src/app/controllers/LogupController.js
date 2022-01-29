const Account = require('../modles/acconut');

class logupCotroller {
    index(req, res, next) {
        res.render('logup');
    }

    acconut(req, res, next) {
        var nameAcc = req.body.nameAcc;
        var passAcc = req.body.passAcc;
        var confirmPass = req.body.confirmPass;

        Account.findOne({
            nameAcc: nameAcc,
        })
            .then((data) => {
                if (data) {
                    res.json(
                        'Tên đăng nhập đã tồn tại, vui lòng sử dụng tên đăng nhập khác',
                    );
                } else {
                    return Account.create({
                        nameAcc: nameAcc,
                        passAcc: passAcc,
                        confirmPass: confirmPass,
                    });
                }
            })
            .then((data) => {
                res.json('Tạo tài khoản thành công');
            })
            .catch((err) => {
                res.status(500).json('Có lỗi xảy ra');
            });

        // const acconut = new Account(req.body);
        // acconut.save();
        // res.json('Đăng kí thành công');
    }
}

module.exports = new logupCotroller();
