const database = require("./index");

const getAll = () => {
  return database.query("select * from project");
};

const deleteProject = (id) => {
  return database.query("delete from project where id = ?", [id]);
};

const add = (project) => {
  return database.query(
    "insert into project (projectName, projectImage, link) values (?, ?, ?)",
    [project.projectName, project.porjectImage, project.link]
  );
};

module.exports = { getAll, deleteProject, add };
