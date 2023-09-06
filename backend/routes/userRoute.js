const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/det', (req, res) => {
  res.send('hi');
});

router.post('/sign', (req, res) => {
  const name = req.body;
  console.log(name)
  res.json({ name });
});

module.exports = router;
