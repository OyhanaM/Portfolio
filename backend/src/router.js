const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
} = require("./controllers/authControllers");

const languageControllers = require("./controllers/languageControllers");
const projectControllers = require("./controllers/projectControllers");
const userControllers = require("./controllers/userControllers");
const { recognizeUser } = require("./middlewares/userMiddlewares");

// Gestion des langages:

router.get("/languages", languageControllers.getLanguage);
router.post("/languages", languageControllers.addLanguage);
router.delete("/languages/:id", languageControllers.deleteLanguage);

// Gestion des projets:

router.get("/projects", projectControllers.getProject);
router.post("/projects", projectControllers.addProject);
router.delete("/projects/:id", projectControllers.deleteProject);

// Gestion des users:

router.get("/users", userControllers.getUsers);
router.post("/users", hashPassword, userControllers.postUser);
router.delete("/users/:id", userControllers.deleteUser);

// Gestion du login :

router.post("/login", recognizeUser, verifyPassword);
router.get("/logout", userControllers.logout);

module.exports = router;
