const { Router } = require("express");
const router = new Router();
const auth = require("../auth/middelware");

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

router.patch("/:id", auth, async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const catcallToUpdate = await Catcall.findByPk(id);
    console.log(id, catcallToUpdate);
    if (!catcallToUpdate) {
      return res.status(400).send("Sorry can't find catcall");
    }
    console.log("req.body", req.body);
    const updatedCatcall = await catcallToUpdate.update({ ...req.body.data });
    // console.log("updated catcall", updatedCatcall);
    res.status(201).send(updatedCatcall);
  } catch (e) {
    next(e.message);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const catcallToDelete = await Catcall.findByPk(id);
    if (!catcallToDelete) {
      res.status(404).send("Catcall not found");
    }
    await catcallToDelete.destroy();
    res.status(204).send("Catcall removed");
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
