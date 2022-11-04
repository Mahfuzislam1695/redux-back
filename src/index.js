const express = require("express");
const app = express();
const routes = require("./routes/index");
const db = require("./db/db");
const errorHandler = require("./middlewares/errors");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config({ path: `${__dirname}/../.env` });
// Pass the global passport object into the configuration function
app.use(cors());

require("./lib/passport")(passport);
app.use(passport.initialize());
app.use(express.json());
app.use("/api", routes);

app.get('/', (req, res) => {
  res.send('Hello redux-market!')
})

//error handler
app.use(errorHandler);
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`App is listening at http://localhost:${port}`)
);

module.exports = app;
