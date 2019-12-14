module.exports = (req, res) => {
    const userId = req.session.userId
    res.render('index', {
        userId
    })
}