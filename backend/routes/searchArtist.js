const express = require('express');
const Router = express.Router();
module.exports = db => {
  Router.get('/:searchArtist', (req,res) => {
    const { title } = req.body;
    const searchTerm = req.params.searchTerm;
    console.log(searchTerm);

    const query =  {
      text: `SELECT artist, rate, streams from artists where $1 = ANY (artist)` , values: [searchTerm]
    };
    db.query(query)
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(err => console.log(err));


  });
  return Router;
}