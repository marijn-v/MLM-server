const { Router } = require("express");
const router = new Router();

const Catcall = require("../models").catcall;

// get catcall
router.get("/", async (req, res, next) => {
  try {
    const allCatcalls = await Catcall.findAll();
    res.send(allCatcalls);
  } catch (e) {
    next(e);
  }
});

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
