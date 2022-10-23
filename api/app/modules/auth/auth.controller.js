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
  login(request, response) {
    loginFn(request.body)
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

async function loginFn(userProps) {
  const userCorrectCredentials = await usersCollection.findOne({
    username: userProps.username,
    password: userProps.password,
  });

  if (userCorrectCredentials === false) {
    throw new Error("Username or Password incorrect!");
  }

  const token = generateToken(userCorrectCredentials);
  console.log(token);

  return;
}
