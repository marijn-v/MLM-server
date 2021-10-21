const { Router } = require("express");
const router = new Router();

const Catcall = require("../models").catcall;

// get random response
router.get("/", async (req, res, next) => {
  // http://localhost:4000/catcalls
  try {
    const allCatcalls = await Catcall.findAll();

    const randomCatcalls =
      allCatcalls[Math.floor(Math.random() * allCatcalls.length)];

    res.send(randomCatcalls);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
