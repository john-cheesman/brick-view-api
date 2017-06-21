'use strict'

module.exports = {
    login: login
}

function checkKey(req, res) {
    let loginCredentials

    loginCredentials = req.swagger.params.loginCredentials.value

    // this sends back a JSON response which is a single string
    res.json({ userHash: userHash })
}
