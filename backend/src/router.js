const express = require("express");

const router = express.Router();

const languageControllers = require("./controllers/languageControllers");
// Gestion des langages

router.get("/languages", languageControllers.getLanguage);
router.post("/languages", languageControllers.addLanguage);
router.delete("/languages/:id", languageControllers.deleteLanguage);

module.exports = router;
