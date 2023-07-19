const projectManager = require("../models/projectManager");

const getProject = (req, res) => {
  projectManager
    .getAll()
    .then((project) => res.json(project[0]))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addProject = (req, res) => {
  const newProject = req.body;
  projectManager.add(newProject).then((project) => {
    if (project.affectedRows === 0) {
      res.Status(404).json("error");
    } else {
      res.status(201).json("Projet ajouté");
    }
  });
};

const deleteProject = (req, res) => {
  projectManager
    .deleteProject(req.params.id)
    .then((project) => {
      if (project.affectedRows === 0) {
        req.status(404).json("error");
      } else {
        res.status(201).json("Projet supprimé");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getProject, addProject, deleteProject };
