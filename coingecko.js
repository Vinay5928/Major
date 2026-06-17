const axios = require("axios");

const getPrices = async () => {

  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd"
      }
    }
  );

  return response.data;

};

module.exports = getPrices;