const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('welcome');
    return res.status(200).send('Welcome');
});

module.exports = router;