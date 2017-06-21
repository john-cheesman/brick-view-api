'use strict'

module.exports = {
    checkKey: checkKey
}

function checkKey(req, res) {
    let apiKey = req.swagger.params.apiKey.value
    let valid = apiKey === 'bob'

    res.json({ valid: valid })
}
