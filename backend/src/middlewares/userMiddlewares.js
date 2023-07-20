const userManager = require("../models/userManager");

const recognizeUser = (req, res, next) => {
  userManager
    .getUserByEmail(req.body)
    .then(([user]) => {
      if (user[0] != null) {
        [req.user] = user;
        next();
      } else {
        res.status(401).send("Error");
      }
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = { recognizeUser };
