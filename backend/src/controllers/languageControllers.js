const languageManager = require("../models/languageManager");

const getLanguage = (req, res) => {
  languageManager.findAll().then((language) => {
    res.json(language[0]);
  });
};

const addLanguage = (req, res) => {
  const newLanguage = req.body;
  languageManager
    .add(newLanguage)
    .then((language) => {
      if (language.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Langage ajouté");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteLanguage = (req, res) => {
  languageManager
    .deleteLanguage(req.params.id)
    .then((language) => {
      if (language.affectedRows === 0) {
        res.status(404).json("error");
      } else {
        res.status(201).json("Language supprimé");
      }
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
};

module.exports = {
  getLanguage,
  addLanguage,
  deleteLanguage,
};
