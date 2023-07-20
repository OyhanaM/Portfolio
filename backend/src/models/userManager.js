const database = require("./index");

const getAll = () => {
  return database.query("select * from user");
};

const createUser = (user) => {
  return database.query(
    "insert into user (email, hashedPassword) values (?, ?)",
    [user.email, user.hashedPassword]
  );
};

const deleteUser = (id) => {
  return database.query("delete from user where id = ?", [id]);
};

const getUserByEmail = (user) => {
  return database.query("select * from user where email = ?", [user.email]);
};

module.exports = { getAll, createUser, deleteUser, getUserByEmail };
