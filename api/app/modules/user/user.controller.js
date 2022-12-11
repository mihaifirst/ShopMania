const { StatusCodes } = require("http-status-codes");
const usersCollection = require("../user/user.schema");

module.exports = {
  getUsers(request, response) {
    getUsersFn()
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

function getUsersFn() {
  return usersCollection.find();
}
