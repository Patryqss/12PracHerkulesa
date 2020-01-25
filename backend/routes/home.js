const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.write("Hello User! Write something.");
  res.end();
});

module.exports = router;
