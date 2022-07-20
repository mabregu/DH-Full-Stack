const main = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.send('Admin ' + req.query.user);
    }
}

module.exports = main;