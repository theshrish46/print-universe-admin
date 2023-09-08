const express = require('express');
const { login, register } = require('../controllers/userControllers');
const router = express.Router();

router.use(express.json());

router.get('/details', (req, res) => {
  res.send('hi');
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;
