const database = require("./index");

const findAll = () => {
  return database.query("select * from language");
};

const add = (language) => {
  return database.query(
    "insert into language (logo, languageName) values (?, ?)",
    [language.logo, language.languageName]
  );
};

const deleteLanguage = (id) => {
  return database.query("delete from language where id = ?", [id]);
};

module.exports = {
  findAll,
  add,
  deleteLanguage,
};
