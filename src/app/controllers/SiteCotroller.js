const Courses = require('../modles/course');

class SiteController {
    index(req, res, next) {
        Courses.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
    }

    show(req, res) {
        res.render('search');
    }

    store(req, res) {
        const course = new Courses(req.body);
        course.save();
        res.send('save finish');
    }
}

module.exports = new SiteController();
