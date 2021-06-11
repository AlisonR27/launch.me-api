'use strict';
module.exports = {
  getGameData: function (req, res) {
    let gameName = req.body.GameName;
    const axios = require('axios');
    axios({
      url: "https://api.igdb.com/v4/games",
      //url: "https://api.igdb.com/v4/external_games",
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        'Authorization' : `Bearer ${process.env.IGDB_TOKEN}`,
      },
      data: "fields id, artworks.*, aggregated_rating, name,summary,first_release_date, cover.*;where name = \""+gameName+"\" & version_parent = null & parent_game = null & version_title = null; limit 1;"
      //data: `fields game.id, game.artworks.*, game.aggregated_rating, game.name,game.summary,game.first_release_date, game.cover.*; where uid = \"${req.body.GameID}\" & category = ${req.body.Platform};`
    }).then(function(response) {
      res.json(response.data);
    }).catch(err => {
      res.json(err)
      console.log(err)
    })
    },
    getCoverData: function (coverID){
      axios({
        url: "https://api.igdb.com/v4/cover",
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.IGDB_CLIENT_ID,
          'Authorization' : `Bearer ${process.env.IGDB_TOKEN}`,
        },
        data: "fields alpha_channel,animated,checksum,game,height,image_id,url,width; "
      }).then(function(response) {
        res.json(response.data);
      }).catch(err => {
        res.json(err)
        console.log(err)
      })
    }
  }