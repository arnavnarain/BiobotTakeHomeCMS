var express = require('express');
var router = express.Router();
const kitData = require('../data/KITS_SHIPPING_DATA.json')

router.get('/filter', function(req, res, next) {
    const matchingRow = kitData.filter(item => item.label_id.startsWith(req.query.kitInput));

    if (matchingRow.length > 0) { 
        res.send(matchingRow);
    } else { 
        res.status(404).send(JSON.stringify('Label not found'))
    }
});

module.exports = router;