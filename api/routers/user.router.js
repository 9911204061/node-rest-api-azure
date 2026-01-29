const router = require('express').Router();

router.get('/user-item', (req, res) => { 
    res.statusCode = 202;
    res.json([{
        "id": 1,
        "name": "John Doe",
        "email":"john.doe@example.com"
}])});

module.exports = router;