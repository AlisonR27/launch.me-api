'use strict';

const { response } = require('express');

  const getToken  = () => {
    setTimeout(() => { 
      auth().then((response)=>{
        console.log("Próxima execução do autenticador: "+ (response.expires_in)/60 +"min");
      })
    }, response.expires_in*1000)
  }
  const auth = () => {
    const axios = require('axios');
    const igdbLink = `https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_KEY}&grant_type=client_credentials`;
    return new Promise((resolve,reject) => {
      axios.post(`${igdbLink}`)
      .then(function(response) {
        process.env.IGDB_TOKEN = response.data.access_token
        resolve(response.data)
      }).catch(err => reject(err))
    })
    
  }  
module.exports = {
  getToken
}