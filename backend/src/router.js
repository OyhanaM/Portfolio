const express = require("express");

const router = express.Router();

const languageControllers = require("./controllers/languageControllers");
const projectControllers = require("./controllers/projectControllers");

// Gestion des langages

router.get("/languages", languageControllers.getLanguage);
router.post("/languages", languageControllers.addLanguage);
router.delete("/languages/:id", languageControllers.deleteLanguage);

// Gestion des projets

router.get("/projects", projectControllers.getProject);
router.post("/projects", projectControllers.addProject);
router.delete("/projects/:id", projectControllers.deleteProject);

module.exports = router;
