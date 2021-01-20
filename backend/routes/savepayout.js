const express = require('express');
const router = express.Router();

module.exports = db => {
  //when accountant clicks save button

  router.post('/', (req, res) => {
    //extract the data from req.body
    const {artist, rate, streams, payout} = req.body;
    console.log("req.body", req.body);
    
    //update payout column
    const query = {
      text: `UPDATE artists SET payout VALUES ($1) RETURNING *`,
      values: [payout]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  })
}
