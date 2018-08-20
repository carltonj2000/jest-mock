const fs = require("fs");

const getUser = userID =>
  new Promise((resolve, reject) => {
    fs.readFile(
      `./src/api/__mocks__/github.${userID}.json`,
      "utf8",
      (err, data) => {
        if (err) reject(err);
        return resolve(JSON.parse(data));
      }
    );
  });

module.exports = { getUser };
