const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

  userId: String,

  coinId: String,

  quantity: Number,

  buyPrice: Number

});

module.exports =
  mongoose.model(
    "Portfolio",
    portfolioSchema
  );
