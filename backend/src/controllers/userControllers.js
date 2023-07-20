const userManager = require("../models/userManager");

const getUsers = (req, res) => {
  userManager
    .getAll()
    .then((users) => res.json(users[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUser = (req, res) => {
  const newUser = req.body;
  userManager
    .createUser(newUser)
    .then(() => {
      res.status(201).json({ message: "Compte créé" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteUser = (req, res) => {
  userManager
    .deleteUser(req.params.id)
    .then((user) => {
      if (user.affectedRows === 0) {
        res.status(404).json("Error");
      } else {
        res.status(201).json("Utilisateur supprimé");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const logout = (req, res) => {
  res.clearCookie("appjwt").status(200).json({ message: "User logged out" });
};

module.exports = { getUsers, postUser, deleteUser, logout };
