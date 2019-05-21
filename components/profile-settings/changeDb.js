const { db } = require("../../firebase/firebase.js");
const path = require("path");

const addToDatabase = (usersObj, userName) => {
  return db
    .ref(`user/${userName}`)
    .set(usersObj)
    .then(() => console.log("post malone"));
};

const updateDatabase = (userName, key, message) => {
  return db
    .ref(`user/${userName}`)
    .update({
      [key]: message
    })
    .then(() => console.log("updated successfully"));
};

const deleteFromDatabase = userName => {
  return db
    .ref(`user/${userName}`)
    .set(null)
    .then(() => console.log("deleted successfully"));
};

const getFromDatabase = (userName, callback) => {
  return db.ref(`user/${userName}`).on("value", callback);
};

// addToDatabase("julianYuen", );

module.exports = {
  addToDatabase,
  updateDatabase,
  deleteFromDatabase,
  getFromDatabase
};
