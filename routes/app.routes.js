const express = require('express');

const router = express.Router();

router.get("/getData", (req, res) => {
    const {page_number, page_length } = req.query;

    res.send(req.query);
});

module.exports = {
    router, 
}