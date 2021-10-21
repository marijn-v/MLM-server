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
    gs;
    res.send(randomCatcalls);
  } catch (e) {
    next(e);
  }
});
//www.thundercl>>ient.io/welcome>

router.post("/", async (req, res, next) => {
  try {
    const { expression } = req.body;
    if (!expression) {
      return res.status(400).send("Please add your catcall!");
    }
    const newCatcall = await Catcall.create({
      expression,
    });
    res.status(201).send(newCatcall);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
