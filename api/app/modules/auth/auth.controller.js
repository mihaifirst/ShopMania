const { StatusCodes } = require("http-status-codes");
const usersCollection = require("../user/user.schema");
const joi = require("joi");
const { generateToken } = require("./token-generator");

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
        // console.log({ newUser });
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
  const validateSchema = joi.object().keys({
    username: joi.string().min(5).max(25).required(),
    fullName: joi.string().min(5).required(),
    password: joi.string().min(4).required(),
    confirmPassword: joi.any().valid(joi.ref("password")).required(),
    email: joi.string().email().required(),
  });

  checkIfSchemaIsValid(validateSchema, userProps);

  return new usersCollection(userProps).save();
}

async function loginFn(userProps) {
  console.log({ userProps });
  const userCorrectCredentials = await usersCollection.findOne({
    username: userProps.username,
    password: userProps.password,
  });
  console.log({ userCorrectCredentials });
  if (userCorrectCredentials === null) {
    throw new Error("Username or Password incorrect!");
  }

  const token = generateToken(userCorrectCredentials);
  // console.log(token);

  return { token };
}

function checkIfSchemaIsValid(schema, body) {
  const { error } = schema.validate(body);
  if (error && error.details) throw new Error(error.details[0].message);

  return null;
}
