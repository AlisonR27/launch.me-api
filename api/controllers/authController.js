'use strict';
  const getToken  = () => {
    const axios = require('axios');
    const igdbLink = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_KEY}&grant_type=client_credentials`;
    axios.post(`${igdbLink}`)
    .then(function(response) {
      process.env.IGDB_TOKEN = response.data.access_token
      setTimeout(() => { 
        getToken()
      }, response.expires_in*1000)
    }).catch(err => console.log(err))
    }
module.exports = {
  getToken
}