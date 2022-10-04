const { StatusCodes } = require("http-status-codes");
const usersCollection = require("../user/user.schema");

module.exports = {
  register(request, response) {
    registerFn(request.body)
      .then((newUser) => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function registerFn(userProps) {
  const userFound = await usersCollection.findOne({
    $or: [{ username: userProps.username }, { email: userProps.email }],
  });

  if (userFound) {
    throw new Error("Username or Email already exists!");
  }

  return new usersCollection(userProps).save();
}
