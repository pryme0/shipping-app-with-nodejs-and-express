const user = require('../models/Users')
module.exports = async(req, res) => {
    const del = await user.findById(req.params.id).deleteOne()
    if (del) { res.redirect(req.headers.referer) }
     else {
        res.redirect(req.headers.referer)
    }

}