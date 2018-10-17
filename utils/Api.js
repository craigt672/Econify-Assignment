const axios = require("axios");

function fetchMapData(address) {
  const API_BASE_URL =
    "https://maps.googleapis.com/maps/api/geocode/json?address";
  const API_KEY = "AIzaSyC52C8DXoamNt8gkpmFqPzNhjirIWuqMYs";
  let formatAddress = address.trim().replace(/ /g, "+");

  return axios.get(`${API_BASE_URL}=${formatAddress}&key=${API_KEY}`);
}

module.exports = {
  fetchMapData
};
