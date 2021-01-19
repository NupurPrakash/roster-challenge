const express = require('express');
const router = express.Router();

module.exports = db => {
  /* GET users listing. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express'});
});

return router;
}

