const express = require("express");
const router = new express.Router();

const scrapCodeWars = require("../scrapper/codewars");
const getStats = require("../utils/getStats");

router.get("/api/stats/all-time", async (req, res) => {
  //   const { names } = req.body;
  const names = ["rabashani", "pini85"];
  try {
    const promises = names.map(async (name) => {
      const fetchData = await scrapCodeWars(name, getStats);

      return fetchData;
    });
    const data = await Promise.all(promises);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});
router.post("/api/all-time", async (req, res) => {
  const { name } = req.body;
  const result = await scrapCodeWars(name, getStats);
  console.log(result);
});
module.exports = router;
