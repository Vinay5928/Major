const express = require("express");

const router = express.Router();

router.get("/prices", async (req, res) => {

  const data = await getPrices();

  res.json(data);

});

module.exports = router;
