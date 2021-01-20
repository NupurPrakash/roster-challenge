const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {
    const query = {
      // text: `SELECT artist, rate, streams, ROUND((rate * streams), 2) as earnings, payout from artists`
      text: `SELECT * from artists`

      
    };
    db.query(query)
      .then(result => {
        console.log("result", result);
        res.json(result)
      })
      .catch(err => console.log(err));
  });
  return router;
}
