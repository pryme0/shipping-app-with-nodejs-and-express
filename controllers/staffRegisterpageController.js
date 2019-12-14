module.exports = (req, res) => {
    res.render('staffregister', {
        errors: req.flash('registrationErrors'),
        data: req.flash('data')[0]

    })
}