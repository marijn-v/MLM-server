const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middelware");
const Admin = require("../models/").admin;
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }
    console.log("user", Admin);
    const user = await Admin.findOne({
      where: { email },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "Admin with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
