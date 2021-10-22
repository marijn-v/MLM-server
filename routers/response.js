const { Router } = require("express");
const router = new Router();

const Response = require("../models").response;
const Languages = require("../models").language;

// get all response
router.get("/", async (req, res, next) => {
  // http://localhost:4000/responses
  try {
    const allResponses = await Response.findAll({
      include: [Languages],
    });
    res.send(allResponses);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
