const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const catcallRouter = require("./routers/catcall");
const responseRouter = require("./routers/response");

const app = express();
app.use(corsMiddleWare());

/**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * a.k.a. body-parser
 * Needed to be able to POST / PUT / PATCH
 *
 * docs: https://expressjs.com/en/api.html#express.json
 *
 */
app.get("/", (req, res) => {
  res.send("hello");
});
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

// routers
app.use("/catcalls", catcallRouter);
app.use("/responses", responseRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
